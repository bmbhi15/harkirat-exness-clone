import { inngest } from "./client";

export const sendUserSignUpEmail = inngest.createFunction(
  { id: "user-signup-email" },
  { event: "user/created" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);
