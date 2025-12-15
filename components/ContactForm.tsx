"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface FormState {
  name: string;
  company: string;
  contact: string;
  projectType: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  contact: "",
  projectType: "商务合作",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error ?? "提交失败，请稍后再试");
      }

      setStatus("success");
      setFeedback(result?.message ?? "提交成功，我们会尽快联系您。");
      setForm(initialState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "提交失败，请稍后再试";
      setStatus("error");
      setFeedback(message);
    }
  };

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">INQUIRY</p>
            <h2 className="mt-2 text-2xl font-semibold">预约沟通表单</h2>
            <p className="mt-2 text-white/70">填写需求后我们会在 24 小时内通过邮箱或电话回复，并可同步推送到企业微信/CRM。</p>
          </div>
          {status !== "idle" && feedback && (
            <p
              className={`text-sm font-semibold ${status === "success" ? "text-emerald-300" : "text-red-300"}`}
              role="status"
            >
              {feedback}
            </p>
          )}
        </div>

        <form className="mt-8 grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-white/70">
              姓名 / 联系人 *
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange("name")}
              className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white/40 focus:outline-none"
              placeholder="如：李先生"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm text-white/70">
              公司 / 机构
            </label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange("company")}
              className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white/40 focus:outline-none"
              placeholder="如：XX 设计事务所"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact" className="text-sm text-white/70">
              邮箱 / 电话 *
            </label>
            <input
              id="contact"
              name="contact"
              required
              value={form.contact}
              onChange={handleChange("contact")}
              className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white/40 focus:outline-none"
              placeholder="contact@company.com / 185xxxx"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="projectType" className="text-sm text-white/70">
              需求类型
            </label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange("projectType")}
              className="rounded-2xl border border-white/10 bg-primary-black px-4 py-3 text-white focus:border-white/40 focus:outline-none"
            >
              {['商务合作', '联合研发', '样品/测试', '媒体/品牌合作'].map((type) => (
                <option key={type} value={type} className="bg-primary-black text-white">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white/70">
              需求描述 *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
              className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white/40 focus:outline-none"
              placeholder="请说明应用场景、时间节点与希望解决的问题"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full border border-white/25 py-3 text-sm font-semibold text-white transition hover:border-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "提交中..." : "提交需求"}
            </button>
            <p className="mt-3 text-center text-xs text-white/60">
              提交即代表您同意我们以邮件或电话方式联系，并可选择接收材料更新简报。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
