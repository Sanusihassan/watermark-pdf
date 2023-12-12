import { useRouter } from "next/router";
import type { edit_page as _ } from "../../content";
import { AddWaterMarkOptions } from "./AddWaterMarkOptions";

export interface OptionsProps {
  layout?: string;
  edit_page: _;
}

const Options = ({ layout, edit_page }: OptionsProps) => {
  return (
    <>
      <AddWaterMarkOptions options={edit_page.options} />
    </>
  );
};

export default Options;
