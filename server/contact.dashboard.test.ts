import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const publicContext: TrpcContext = {
  user: null,
  req: {} as TrpcContext["req"],
  res: {} as TrpcContext["res"],
};

const customerContext: TrpcContext = {
  user: {
    id: 2,
    openId: "customer-open-id",
    name: "Cliente",
    email: "cliente@example.com",
    loginMethod: "test",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  },
  req: {} as TrpcContext["req"],
  res: {} as TrpcContext["res"],
};

describe("contact dashboard access", () => {
  it("bloqueia visitantes sem autenticação", async () => {
    await expect(appRouter.createCaller(publicContext).contact.list()).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });

  it("bloqueia utilizadores autenticados sem role de administrador", async () => {
    await expect(appRouter.createCaller(customerContext).contact.list()).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });
});
