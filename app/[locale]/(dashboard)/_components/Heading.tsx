interface HeadingProps {
  title: string;
  description: string;
  icon: string;
  iconColor?: string;
  bgColor: string;
}

const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return <div>Heading</div>;
};

export default Heading;
