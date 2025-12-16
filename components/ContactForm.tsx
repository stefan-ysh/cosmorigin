"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
      <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card/5 p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">INQUIRY</p>
            <h2 className="mt-2 text-2xl font-semibold">预约沟通表单</h2>
            <p className="mt-2 text-muted-foreground">填写需求后我们会在 24 小时内通过邮箱或电话回复，并可同步推送到企业微信/CRM。</p>
          </div>
          {status !== "idle" && feedback && (
            <p
              className={`text-sm font-semibold ${status === "success" ? "text-emerald-500" : "text-destructive"}`}
              role="status"
            >
              {feedback}
            </p>
          )}
        </div>

        <form className="mt-8 grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">姓名 / 联系人 *</Label>
            <Input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange("name")}
              placeholder="如：李先生"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="company">公司 / 机构</Label>
            <Input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange("company")}
              placeholder="如：XX 设计事务所"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="contact">邮箱 / 电话 *</Label>
            <Input
              id="contact"
              name="contact"
              type="email"
              required
              value={form.contact}
              onChange={handleChange("contact")}
              placeholder="contact@company.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="projectType">项目类型</Label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange("projectType")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="商务合作">商务合作</option>
              <option value="技术咨询">技术咨询</option>
              <option value="产品定制">产品定制</option>
              <option value="研发支持">研发支持</option>
              <option value="其他">其他</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <Label htmlFor="message">需求描述 *</Label>
            <Textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange("message")}
              placeholder="请说明应用场景、时间节点与希望解决的问题"
              rows={4}
            />
          </div>

          <div className="md:col-span-2">
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full"
              size="lg"
            >
              {status === "loading" ? "提交中..." : "提交需求"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
