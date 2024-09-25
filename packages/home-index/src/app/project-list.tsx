import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomeAPI } from "@xxx/services-api";

interface ProjectListProps {
  projects?: HomeAPI.ProjectInfo[] | undefined;
  filter?: (project: HomeAPI.ProjectInfo) => boolean;

  onSelected?: (project: HomeAPI.ProjectInfo) => void;

  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectList(props: ProjectListProps) {
  const { filter = () => true } = props;
  return (
    <div className="flex">
      {props.projects?.filter(filter)?.map((option) => {
        return (
          <Card key={option.id} className="w-[350px] mr-4 hover:scale-105">
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="#">
                <h3 className="project-title">{option.name}</h3>
              </a>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
