import type { edit_page as _ } from "../../content";
import { AddWaterMarkOptions } from "./AddWaterMarkOptions";

export interface OptionsProps {
  edit_page: _;
}

const Options = ({ edit_page }: OptionsProps) => {
  return (
    <>
      <AddWaterMarkOptions options={edit_page.options} />
    </>
  );
};

export default Options;
