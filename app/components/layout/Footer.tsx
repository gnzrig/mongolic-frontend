import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="footerBackground w-full flex items-center">
        <div className="max-w-container footerBackground flex-c-center text-white text-[15px] leading-[26px] py-8 md:justify-between md:items-start md:flex-row">
          <div className="space-y-6">
            <FooterLinks list={["About", "Authors", "Advertise With Us", "Book our Speakers", "Legal"]} href={["/", "/", "/", "/", "/"]} />
          </div>
          <div className="mt-4 lg:mt-0">
            <FooterLinks
              list={["Support", "Standards & Policies", "Shipping & Returns", "Careers", "Submit a Tip", "Media & Press Inquiries"]}
              href={["/", "/", "/", "/", "/", "/"]}
            />
          </div>
          <div className="mt-8 lg:mt-0">
            <FooterLinks
              image={true}
              list={[
                "/icon/footer/facebook.svg",
                "/icon/footer/X.svg",
                "/icon/footer/instagram.svg",
                "/icon/footer/youtube.svg",
                "/icon/footer/RSS.svg",
              ]}
              href={["/", "/", "/", "/", "/"]}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-[#666666]"></div>
      <div className="footerBackground w-full flex items-center text-white text-xs leading-[21px]">
        <div className="max-w-container footerBackground flex-c-center py-4 font-thin md:flex-r-center">
          <span>© Copyright 2024, The Daily Wire LLC </span>
          <span className="hidden md:flex">&nbsp;|&nbsp;</span>
          <span>Terms | Privacy</span>
        </div>
      </div>
    </>
  );
};

const FooterLinks = ({ list, href, image = false }: { list: Array<string>; href: Array<string>; image?: boolean }) => {
  return (
    <>
      <ul className={image ? "flex-r gap-4 md:items-start" : "space-y-4 font-thin"}>
        {list.map((e, i) => (
          <li key={i} className={`text-center md:text-start ${image && "rounded-full border border-[#616161] p-2 w-10 h-10 flex-r-center"}`}>
            <Link href={href[i]}>{image ? <Image src={e} width={21} height={21} alt="icon" style={{ objectFit: "cover" }} /> : e}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
