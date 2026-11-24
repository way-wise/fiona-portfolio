"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";
import { IoMdArrowForward } from "react-icons/io";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "ui-ux",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "ui-ux",
        message: "",
      });
      onClose();
    }, 600);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <DialogPanel
          transition
          className="relative w-full max-w-2xl rounded-3xl bg-white p-7 shadow-2xl transition-all duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 sm:max-w-3xl sm:p-10 dark:bg-zinc-900"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 grid size-10 cursor-pointer place-items-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-black dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-8">
            <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1.5 font-['Raleway',Helvetica] text-xs font-semibold text-fiona-red dark:bg-rose-950/40">
              Get In Touch
            </span>
            <DialogTitle as="h2" className="mt-2.5 font-['Raleway',Helvetica] text-2xl font-bold text-black sm:text-3xl md:text-4xl dark:text-white">
              Let&apos;s Work Together
            </DialogTitle>
            <p className="mt-1.5 text-base text-[#6c6c6c] dark:text-zinc-400">
              Have a project in mind or want to discuss a design? Send a message
              and let&apos;s create something great.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
                >
                  Your Name <span className="text-fiona-red">*</span>
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 rounded-xl border-zinc-200 px-4 py-3 text-base placeholder:text-base focus-visible:border-fiona-red focus-visible:ring-fiona-red dark:border-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
                >
                  Email Address <span className="text-fiona-red">*</span>
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 rounded-xl border-zinc-200 px-4 py-3 text-base placeholder:text-base focus-visible:border-fiona-red focus-visible:ring-fiona-red dark:border-zinc-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-semibold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
                >
                  Phone Number <span className="text-fiona-red">*</span>
                </label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g. +1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 rounded-xl border-zinc-200 px-4 py-3 text-base placeholder:text-base focus-visible:border-fiona-red focus-visible:ring-fiona-red dark:border-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-service"
                  className="text-xs font-semibold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
                >
                  Service Interested In
                </label>
                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger
                    id="contact-service"
                    className="h-12 w-full rounded-xl border-zinc-200 px-4 py-3 text-base focus:border-fiona-red focus:ring-fiona-red data-[size=default]:h-12 dark:border-zinc-700"
                  >
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="web">Web Design</SelectItem>
                    <SelectItem value="mobile">Mobile App Design</SelectItem>
                    <SelectItem value="email">Email Template Design</SelectItem>
                    <SelectItem value="branding">
                      Branding & Identity
                    </SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold tracking-wide text-zinc-700 uppercase dark:text-zinc-300"
              >
                Project Details / Message{" "}
                <span className="font-normal lowercase text-zinc-400">
                  (optional)
                </span>
              </label>
              <Textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project, timeline, or requirements..."
                value={formData.message}
                onChange={handleChange}
                className="rounded-xl border-zinc-200 p-4 text-base focus-visible:ring-fiona-red dark:border-zinc-700"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex cursor-pointer items-center gap-3 rounded-full bg-black px-8 py-3.5 font-['Raleway',Helvetica] text-base font-semibold text-white transition-all hover:bg-black/90 disabled:opacity-50"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span className="grid size-8 place-items-center rounded-full bg-fiona-red text-white transition-transform group-hover:translate-x-0.5">
                  <IoMdArrowForward size={18} />
                </span>
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ContactModal;
