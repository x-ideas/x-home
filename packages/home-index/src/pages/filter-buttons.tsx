import classNames from "classnames";
import { useEffect, useState } from "react";

interface OptionInfo<T extends string | number> {
  value: T;
  name: string;
}

interface FilterButtonsProps<T extends string | number> {
  options: OptionInfo<T>[];

  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
}

export default function FilterButtons<T extends string | number>(
  props?: FilterButtonsProps<T>,
) {
  const [innerValue, setInnerValue] = useState<T | undefined>(
    props?.defaultValue,
  );

  useEffect(() => {
    setInnerValue(props?.value);
  }, [props?.value]);

  const handleOnSelect = (option: OptionInfo<T>) => {
    props?.onChange?.(option.value);

    if (props && Reflect.has(props, "value")) {
      return;
    } else {
      // 设置内部状态
      setInnerValue(option.value);
    }
  };

  return (
    <>
      {/* 大屏展示 */}
      <ul className="filter-list">
        {props?.options?.map((option) => {
          return (
            <li
              className="filter-item"
              key={option.value}
              onClick={() => handleOnSelect(option)}
            >
              <button
                className={classNames({
                  active: innerValue === option.value,
                })}
                data-filter-btn
              >
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>

      {/* 小屏展示 */}
      <div className="filter-select-box">
        <button className="filter-select" data-select>
          <div className="select-value" data-selecct-value>
            Select category
          </div>

          <div className="select-icon"></div>
        </button>
        <ul className="select-list">
          {props?.options?.map((option) => {
            return (
              <li
                className="select-item"
                key={option.value}
                onClick={() => handleOnSelect(option)}
              >
                <button data-filter-btn>{option.name}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
