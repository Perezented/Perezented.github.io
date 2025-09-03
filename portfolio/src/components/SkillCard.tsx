type SkillCardProps = {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
};


export default function SkillCard({ icon, iconClassName = "", title, description }: SkillCardProps) {
  return (
    <div className="text-center">
      <div className={`mx-auto h-12 w-12 ${iconClassName}`}>
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}