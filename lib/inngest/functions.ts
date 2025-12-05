import { inngest } from "./client";
import { sendEmailNodemailer } from "../nodemailer";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";

export const sendUserSignUpEmail = inngest.createFunction(
  { id: "user-signup-email" },
  { event: "user/created" },
  async ({ event, step }) => {
    const USER_PROFILE = ` UserName: ${event.data.fullName}
    Investment Goals: ${event.data.investmentGoals},
  Preferred Industry: ${event.data.preferredIndustry},
  Risk Tolerance: ${event.data.riskTolerance}`;

    const personalizedPrompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{userProfile}}",
      USER_PROFILE
    );
    const response = await step.ai.infer("call-gemini", {
      model: step.ai.models.gemini({ model: "gemini-2.5-flash" }),

      body: {
        contents: [
          {
            role: "user",
            parts: [{ text: personalizedPrompt }],
          },
        ],
      },
    });
    const mainContent = response.candidates[0].content.parts[0].text;
    const res = await step.run("send-welcome-email", async () => {
      return sendEmailNodemailer(
        event.data.fullName,
        event.data.email,
        mainContent
      );
    });
    return res;
  }
);
