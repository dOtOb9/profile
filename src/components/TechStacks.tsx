import TechStackIcon from "./TechStackIcon";

export default function TechStacks() {
    return (
      <div className="block grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 max-w-fit">
          <TechStackIcon href="https://www.python.org/" imgSrc="/Python_logo.png" altText="Python" />
          <TechStackIcon href="https://javascript.info/" imgSrc="/JavaScript_logo.png" altText="JavaScript" />
          <TechStackIcon href="https://www.typescriptlang.org/" imgSrc="/ts-logo-128.png" altText="TypeScript" />
          <TechStackIcon href="https://kotlinlang.org/" imgSrc="/Kotlin-logo.svg" altText="Kotlin" />
          <TechStackIcon href="https://cplusplus.com/" imgSrc="/Cpp_logo.png" altText="C++" />
          <TechStackIcon href="https://www.rust-lang.org/" imgSrc="/Rust_logo.png" altText="Rust" />
          <TechStackIcon href="https://haskell.org/" imgSrc="/Haskell_logo.png" altText="Haskell" />
          <TechStackIcon href="https://processing.org/" imgSrc="/Processing_logo.png" altText="Processing" />
          <TechStackIcon href="https://pytorch.org/" imgSrc="/PyTorch_logo.png" altText="PyTorch" />
          <TechStackIcon href="https://react.dev/" imgSrc="/react-logo.svg" altText="React" />
          <TechStackIcon href="https://tailwindcss.com/" imgSrc="/tailwind-logo.svg" altText="Tailwind CSS" />
          <TechStackIcon href="https://nextjs.org/" imgSrc="/nextjs-logo.svg" altText="Next.js" />
          <TechStackIcon href="https://firebase.google.com/" imgSrc="/Firebase_logo.svg" altText="Firebase" />
          <TechStackIcon href="https://aws.amazon.com/lambda/" imgSrc="/Lambda_logo.svg" altText="AWS Lambda" />
          <TechStackIcon href="https://aws.amazon.com/ec2/" imgSrc="/EC2_logo.svg" altText="AWS EC2" />
      </div>
    )
}