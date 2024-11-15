import { Paperclip } from "lucide-react";
import Input from "../../general-settings/Input";

export default function ViewCertificate() {
  return (
    <div className="w-full flex bg-white p-4 mt-6 mb-16 items-start flex-col gap-4">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        Certificate Email
      </h2>
      <Input label="Title" value="Dear [Subscriber’s name]" />
      <Input
        label="Message Body"
        value="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
        inputType="textarea"
        rows={8}
      />
      <div className="w-[166px] h-[40px] rounded-[4px] border border-[#C0C0CF] flex items-center gap-4 justify-center">
        <Paperclip color="#000" size="18px" />
        <h4 className="text-[#212134] font-bold text-[14px] leading-[16px]">
          Add Attachment
        </h4>
      </div>
      <Input
        label="Closing Statement"
        value="We sincerely appreciate your continued patronage"
      />
      <Input label="Complimentary" value="Kind regards," />
    </div>
  );
}
