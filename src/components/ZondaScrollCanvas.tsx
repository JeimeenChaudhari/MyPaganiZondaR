import { useRef, useEffect, useState, useCallback } from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";
import JSZip from "jszip";

interface ZondaScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  zipPath: string;
}

const ZondaScrollCanvas = ({ scrollYProgress, totalFrames, zipPath }: ZondaScrollCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number>(0);
  const targetFrameRef = useRef(0);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  // Load images from ZIP with parallel processing for speed
  useEffect(() => {
    const loadImagesFromZip = async () => {
      try {
        console.log("Starting to load images from:", zipPath);
        const response = await fetch(zipPath);
        console.log("Fetch response status:", response.status);
        const blob = await response.blob();
        console.log("Blob size:", blob.size);
        const zip = await JSZip.loadAsync(blob);

        const imageFiles: { name: string; file: JSZip.JSZipObject }[] = [];

        zip.forEach((relativePath, file) => {
          if (!file.dir && /\.(jpg|jpeg|png|webp)$/i.test(relativePath)) {
            imageFiles.push({ name: relativePath, file });
          }
        });

        // Sort by filename number
        imageFiles.sort((a, b) => {
          const numA = parseInt(a.name.match(/(\d+)/)?.[1] || "0");
          const numB = parseInt(b.name.match(/(\d+)/)?.[1] || "0");
          return numA - numB;
        });

        console.log(`Found ${imageFiles.length} images in ZIP`);

        // Load images in parallel batches for faster loading
        const batchSize = 20;
        const loadedImages: (HTMLImageElement | null)[] = new Array(imageFiles.length).fill(null);
        let completedCount = 0;

        const loadImage = async (index: number) => {
          const { file } = imageFiles[index];
          const imgBlob = await file.async("blob");
          const url = URL.createObjectURL(imgBlob);

          const img = new Image();
          await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = reject;
            img.src = url;
          });

          loadedImages[index] = img;
          completedCount++;
          setLoadingProgress(Math.round((completedCount / imageFiles.length) * 100));
        };

        // Process in parallel batches
        for (let i = 0; i < imageFiles.length; i += batchSize) {
          const batch = [];
          for (let j = i; j < Math.min(i + batchSize, imageFiles.length); j++) {
            batch.push(loadImage(j));
          }
          await Promise.all(batch);
        }

        const filteredImages = loadedImages.filter((img): img is HTMLImageElement => img !== null);
        setImages(filteredImages);
        console.log(`Successfully loaded ${filteredImages.length} images`);

        // Draw the first frame immediately when loading completes
        if (filteredImages.length > 0) {
          // Use a small timeout to ensure state update completes
          setTimeout(() => {
            const canvas = canvasRef.current;
            if (canvas && filteredImages[0]) {
              const ctx = canvas.getContext("2d", { alpha: false });
              if (ctx) {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.getBoundingClientRect();

                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);

                const img = filteredImages[0];
                const scaleFactor = 0.85;
                const imgRatio = img.width / img.height;
                const canvasRatio = rect.width / rect.height;

                let drawWidth, drawHeight, drawX, drawY;

                if (imgRatio > canvasRatio) {
                  drawWidth = rect.width * scaleFactor;
                  drawHeight = drawWidth / imgRatio;
                  drawX = (rect.width - drawWidth) / 2;
                  drawY = (rect.height - drawHeight) / 2 + (rect.height * 0.05);
                } else {
                  drawHeight = rect.height * scaleFactor;
                  drawWidth = drawHeight * imgRatio;
                  drawX = (rect.width - drawWidth) / 2;
                  drawY = (rect.height - drawHeight) / 2 + (rect.height * 0.05);
                }

                ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
                currentFrameRef.current = 0;
              }
            }
            setIsLoading(false);
          }, 50);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading images from ZIP:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadImagesFromZip();
  }, [zipPath]);

  // Draw frame on canvas with high DPI support
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frameIdx = Math.min(Math.max(0, Math.round(index)), images.length - 1);
    if (frameIdx === currentFrameRef.current && canvas.width > 0) return;

    const img = images[frameIdx];
    if (!img) return;

    // High DPI support
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Clear canvas with black background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Object-fit: contain logic with scale factor to make image smaller
    const scaleFactor = 0.85; // Make image 85% of original size
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;

    let drawWidth, drawHeight, drawX, drawY;

    if (imgRatio > canvasRatio) {
      drawWidth = rect.width * scaleFactor;
      drawHeight = drawWidth / imgRatio;
      drawX = (rect.width - drawWidth) / 2;
      drawY = (rect.height - drawHeight) / 2 + (rect.height * 0.05); // Shift down slightly
    } else {
      drawHeight = rect.height * scaleFactor;
      drawWidth = drawHeight * imgRatio;
      drawX = (rect.width - drawWidth) / 2;
      drawY = (rect.height - drawHeight) / 2 + (rect.height * 0.05); // Shift down slightly
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    currentFrameRef.current = frameIdx;
  }, [images]);

  // Smooth animation loop using RAF for butter-smooth scrolling
  useEffect(() => {
    if (images.length === 0) return;

    const animate = () => {
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;

      // Interpolate towards target for smoother motion
      const diff = target - current;
      if (Math.abs(diff) > 0.1) {
        const nextFrame = current + diff * 0.3; // Smooth easing
        drawFrame(nextFrame);
      } else if (Math.abs(diff) > 0.01) {
        drawFrame(target);
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [images, drawFrame]);

  // Update target frame when scroll changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    targetFrameRef.current = latest;
  });

  // Initial draw and resize handler
  useEffect(() => {
    if (images.length > 0) {
      drawFrame(0);
    }

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = 0;
        canvas.height = 0;
      }
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, drawFrame]);

  return (
    <div className="absolute inset-0 w-full h-full bg-pagani-black">
      {/* Fallback gradient background */}
      {(hasError || images.length === 0) && !isLoading && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)
            `
          }}
        />
      )}

      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-pagani-black">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full -rotate-90 animate-pulse" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--carbon-gray))"
                strokeWidth="3"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--pagani-gold))"
                strokeWidth="3"
                strokeDasharray={`${loadingProgress * 2.83} 283`}
                strokeLinecap="round"
                className="transition-all duration-100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-orbitron text-lg font-bold text-pagani-gold">
                {loadingProgress}%
              </span>
            </div>
          </div>
          <p className="mt-4 font-rajdhani text-sm text-muted-foreground">
            Loading Zonda R Experience...
          </p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        style={{ display: "block" }}
      />
    </div>
  );
};

export default ZondaScrollCanvas;