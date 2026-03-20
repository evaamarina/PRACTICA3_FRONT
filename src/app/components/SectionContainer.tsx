import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return <section className="sectionContainer">{children}</section>;
};

export default SectionContainer;