import Input from "../../general-settings/Input";

export default function ViewSMS() {
  return (
    <div className="w-full flex bg-white p-4 mt-6 mb-16 items-start flex-col gap-4">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        SMS
      </h2>
      <Input label="Title" value="Dear [Subscriber’s name]" />
      <Input
        label="Message Body"
        value="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
        inputType="textarea"
        rows={8}
      />
    </div>
  );
}
