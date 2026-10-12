import { beforeEach, describe, expect, it } from "vitest";
import {
  addContactEventClient,
  broadcastContactCreated,
  getContactEventClientCount,
} from "./contactEvents";

const makeResponse = () => {
  const writes: string[] = [];
  return { writes, write: (value: string) => { writes.push(value); return true; } };
};

describe("contact SSE events", () => {
  beforeEach(() => {
    // The event registry is process-local; every test removes its own client.
  });

  it("transmite novos pedidos aos clientes ligados", () => {
    const response = makeResponse();
    const remove = addContactEventClient(response as never);

    broadcastContactCreated({ id: 42, name: "Ana", service: "Fachadas" });

    expect(response.writes).toHaveLength(1);
    expect(response.writes[0]).toContain("event: contact.created");
    expect(response.writes[0]).toContain('"id":42');
    expect(response.writes[0]).toContain('"name":"Ana"');
    expect(getContactEventClientCount()).toBeGreaterThan(0);

    remove();
    expect(getContactEventClientCount()).toBe(0);
  });
});
