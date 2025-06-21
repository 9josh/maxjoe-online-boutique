
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="padding-vertical-2xl sm\:padding-vertical-3xl padding-horizontal-base bg-gradient-dark">
      <div className="container-medium margin-auto text-center">
        <h2 className="heading-xs sm\:heading-sm md\:heading-md font-light text-white margin-bottom-base">
          Stay Connected
        </h2>
        <p className="body-base sm\:body-lg text-lightest margin-bottom-xl container-small margin-auto padding-horizontal-base">
          Be the first to discover our latest collections, exclusive offers, and jewelry insights. 
          Join our community of luxury enthusiasts.
        </p>
        
        <div className="flex-column sm\:flex-row gap-base container-xs margin-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address"
            className="input bg-semi-transparent border-lightest text-white placeholder:text-lightest hover\:border-light flex-grow"
          />
          <Button className="btn btn-primary bg-white text-primary hover\:bg-lighter font-medium padding-horizontal-lg sm\:padding-horizontal-xl layout-full-width sm\:width-auto">
            Subscribe
          </Button>
        </div>
        
        <p className="body-xs sm\:body-sm text-light margin-top-base padding-horizontal-base">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
