"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Link as LinkIcon, X } from "lucide-react";
import { toast } from "sonner";
import { PortfolioItem, portfolioItems } from "@/lib/portfolio-data";
import { useContactModal } from "@/providers/contact-modal-provider";

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (item: PortfolioItem) => void;
}

const getValidImageUrl = (src: string) => {
  if (!src) return "/hero-bg.png";
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `/${src}`;
};

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
  onSelectProject,
}: ProjectDetailModalProps) => {
  const { openContactModal } = useContactModal();
  const [zoomPos, setZoomPos] = useState<{ x: number; y: number } | null>(null);

  if (!project) return null;

  const hasValidLink = Boolean(
    project.demoUrl && project.demoUrl.trim().length > 0,
  );

  const handleCopyLink = () => {
    if (project.demoUrl?.trim()) {
      navigator.clipboard.writeText(project.demoUrl.trim());
      toast.success("Project link copied to clipboard!");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleMouseLeave = () => {
    setZoomPos(null);
  };

  // Select 4 other projects from the same category or overall items
  const relatedProjects = portfolioItems
    .filter((item) => item.id !== project.id)
    .sort((a) => (a.category === project.category ? -1 : 1))
    .slice(0, 4);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 ease-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto p-3 sm:p-6 md:p-8">
        <DialogPanel
          transition
          className="relative my-auto min-h-[85vh] max-h-[95vh] w-full max-w-7xl xl:max-w-[1450px] 2xl:max-w-[1600px] overflow-y-auto rounded-3xl border border-zinc-800 bg-[#0c0c0e] p-6 text-white shadow-2xl transition-all duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 sm:p-10 md:p-12"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
            <h2 className="font-['Raleway',Helvetica] text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {project.title}
            </h2>

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              {hasValidLink && (
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-emerald-800/50 bg-emerald-950/40 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-900/40 hover:text-emerald-300"
                >
                  <span>Copy link</span>
                  <LinkIcon size={15} />
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="grid size-10 sm:size-11 cursor-pointer place-items-center rounded-full bg-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main 2-column layout */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left Column: Details */}
            <div className="flex flex-col justify-between space-y-8 lg:col-span-5 xl:col-span-4">
              <div className="space-y-6">
                {/* Role */}
                <div>
                  <p className="font-['Inter',Helvetica] text-sm sm:text-base text-zinc-300">
                    <span className="font-semibold text-zinc-400">
                      My role:{" "}
                    </span>
                    <span className="font-medium text-white">
                      {project.highlightKeyword ||
                        "Graphics Designer, Frontend Developer, UI/UX Designer"}
                    </span>
                  </p>
                </div>

                {/* Project description */}
                <div className="space-y-2.5">
                  <h4 className="font-['Raleway',Helvetica] text-base sm:text-lg font-semibold text-white">
                    Project description
                  </h4>
                  <p className="font-(family-name:--font-outfit) text-sm sm:text-base leading-relaxed text-zinc-300">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Skills and deliverables */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-['Raleway',Helvetica] text-base sm:text-lg font-semibold text-white">
                      Skills and deliverables
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-zinc-700 bg-zinc-800/90 px-4 py-2 font-['Inter',Helvetica] text-xs sm:text-sm font-medium text-zinc-100 shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features (if available) */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-['Raleway',Helvetica] text-base sm:text-lg font-semibold text-white">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2 font-(family-name:--font-outfit) text-sm sm:text-base text-zinc-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="size-2 mt-1.5 shrink-0 rounded-full bg-fiona-red" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Published / Date */}
                {project.completionDate?.trim() && (
                  <p className="font-['Inter',Helvetica] text-sm text-zinc-400">
                    Published on {project.completionDate.trim()}
                  </p>
                )}

                {/* Demo Link if available */}
                {project.demoUrl && (
                  <div>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-fiona-red px-5 py-2.5 font-['Inter',Helvetica] text-sm font-semibold text-white transition-colors hover:bg-fiona-red/90 shadow-md"
                    >
                      <span>Live Preview</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Bottom Inquire / Issue link */}
              <div className="border-t border-zinc-800/80 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openContactModal();
                  }}
                  className="cursor-pointer font-['Inter',Helvetica] text-sm font-medium text-zinc-300 underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  Inquire about this project
                </button>
              </div>
            </div>

            {/* Right Column: Featured Image with Hover Zoom */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group/zoom relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-3 sm:p-6 min-h-[480px] lg:min-h-[580px] xl:min-h-[640px]"
              >
                <Image
                  src={getValidImageUrl(project.image)}
                  alt={project.title}
                  width={1600}
                  height={1100}
                  className="pointer-events-none h-auto max-h-[600px] lg:max-h-[680px] xl:max-h-[740px] w-full rounded-xl object-contain transition-transform duration-200 ease-out select-none"
                  style={
                    zoomPos
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                          transform: "scale(1.75)",
                        }
                      : {
                          transformOrigin: "center center",
                          transform: "scale(1)",
                        }
                  }
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Section: More by Fiona B. */}
          {relatedProjects.length > 0 && (
            <div className="mt-14 border-t border-zinc-800/80 pt-10">
              <h4 className="mb-6 font-['Raleway',Helvetica] text-lg sm:text-xl font-semibold text-white">
                More by{" "}
                <span className="text-fiona-red underline decoration-fiona-red">
                  Fiona B.
                </span>
              </h4>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
                {relatedProjects.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectProject(item)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3 transition-all hover:scale-[1.02] hover:border-zinc-700 hover:shadow-xl"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-950">
                      <Image
                        src={getValidImageUrl(item.image)}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <p className="mt-3 truncate font-(family-name:--font-outfit) text-sm sm:text-base font-medium text-zinc-200 group-hover:text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProjectDetailModal;
