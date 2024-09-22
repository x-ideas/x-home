import classnames from "classnames";

interface OptionInfo {
  value: string;
  name: string;
  /** 类别 */
  // category: string;
}

interface ProjectListProps {
  allOptions?: OptionInfo[];
  filter?: (optInfo: OptionInfo) => boolean;

  onSelected?: (optInfo: OptionInfo) => void;
}

export default function ProjectList(props: ProjectListProps) {
  const { filter = () => true } = props;
  return (
    <ul className="project-list">
      {props?.allOptions?.filter(filter)?.map((option) => {
        return (
          <li
            key={option.value}
            className={classnames("project-item active")}
            data-filter-item
            data-category="web development"
            onClick={() => props?.onSelected?.(option)}
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box"></div>
              </figure>

              <h3 className="project-title">{option.name}</h3>

              {/* <p className="project-category">{option.category}</p> */}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
