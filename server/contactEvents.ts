import type { Response } from "express";

export type ContactCreatedEvent = {
  id: number;
  name: string;
  service: string;
};

const clients = new Set<Response>();

export function addContactEventClient(response: Response) {
  clients.add(response);
  return () => clients.delete(response);
}

export function broadcastContactCreated(event: ContactCreatedEvent) {
  const payload = `event: contact.created\ndata: ${JSON.stringify(event)}\n\n`;
  clients.forEach(client => {
    try {
      client.write(payload);
    } catch {
      clients.delete(client);
    }
  });
}

export function getContactEventClientCount() {
  return clients.size;
}
