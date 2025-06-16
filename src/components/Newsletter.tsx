
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-4">
          Be the first to discover our latest collections, exclusive offers, and jewelry insights. 
          Join our community of luxury enthusiasts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-white/40 flex-1"
          />
          <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-6 sm:px-8 w-full sm:w-auto">
            Subscribe
          </Button>
        </div>
        
        <p className="text-xs sm:text-sm text-gray-400 mt-4 px-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
