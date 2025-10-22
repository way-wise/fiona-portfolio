import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IoMdArrowForward } from "react-icons/io";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-rose-50 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            Great Design Starts Together
          </h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            Whether you need a stunning UI, a user-friendly experience, or
            eye-catching visuals — let&apos;s bring your idea to life, together.
          </p>
        </div>

        <form className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Your Name
            </label>
            <Input id="name" placeholder="Enter your name" />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-foreground"
            >
              Phone
            </label>
            <Input id="phone" type="tel" placeholder="Enter phone number" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Service Interested In
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="web">Web Design</SelectItem>
                <SelectItem value="mobile">Mobile App Design</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Your message
            </label>
            <Textarea id="message" rows={6} placeholder="Write your message" />
          </div>

          <div className="md:col-span-2">
            <Button
              type="submit"
              className="h-12 rounded-full bg-black px-6 text-white hover:bg-black/90"
            >
              <span className="mr-2 text-base">Send Message</span>
              <span className="ml-auto flex size-9 items-center justify-center rounded-full bg-red-600">
                <IoMdArrowForward className="size-5 text-white" />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
