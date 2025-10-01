import { memo } from "react";
import { FaDiscord, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdStorefront } from "react-icons/md";

export const Footer = memo(() => {
  return (
    <footer className="bg-[#3B3B3B] text-white py-12">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MdStorefront className="text-[#A259FF] text-3xl" />
              <span className="text-xl font-bold">NFT Marketplace</span>
            </div>
            <p className="text-[#CCCCCC] leading-relaxed">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div>
              <p className="text-[#CCCCCC] mb-4">Join our community</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:text-[#A259FF] transition-colors"
                  aria-label="Discord"
                >
                  <FaDiscord className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:text-[#A259FF] transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:text-[#A259FF] transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:text-[#A259FF] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Explore</h3>
            <nav className="flex flex-col gap-4">
              <a
                href="#"
                className="text-[#CCCCCC] hover:text-white transition-colors"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="text-[#CCCCCC] hover:text-white transition-colors"
              >
                Rankings
              </a>
              <a
                href="#"
                className="text-[#CCCCCC] hover:text-white transition-colors"
              >
                Connect a wallet
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Join Our Weekly Digest</h3>
            <p className="text-[#CCCCCC] leading-relaxed">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <form className="flex gap-3 sm: flex-col">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-5 py-3 rounded-full bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A259FF]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#A259FF] hover:bg-[#8B3FE8] text-white rounded-full font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-[#858584]">
          <p className="text-[#CCCCCC] text-sm">
            © NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
});
