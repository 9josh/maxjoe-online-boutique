
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="padding-vertical-3xl sm-padding-vertical-2xl bg-grey-whisper">
      <div className="container-medium margin-auto text-center padding-horizontal-base">
        <h2 className="heading-xs sm-heading-sm md-heading-md font-light text-grey-charcoal margin-bottom-base">
          Stay Connected
        </h2>
        <p className="body-base sm-body-lg text-grey-slate margin-bottom-xl container-small margin-auto padding-horizontal-base">
          Be the first to discover our latest collections, exclusive offers, and jewelry insights. 
          Join our community of luxury enthusiasts.
        </p>
        
        <div className="newsletter-form-container margin-auto flex justify-center">
          <div className="flex-column sm-flex-row gap-base justify-center items-center w-full">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <Button className="newsletter-button">
              Subscribe
            </Button>
          </div>
        </div>
        
        <p className="body-xs sm-body-sm text-grey-medium margin-top-base padding-horizontal-base text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
