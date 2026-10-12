CREATE TABLE `contactSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(40) NOT NULL,
	`service` varchar(160) NOT NULL,
	`message` text NOT NULL,
	`status` enum('new','in_progress','quoted','won','lost') NOT NULL DEFAULT 'new',
	`crmStatus` enum('not_configured','pending','synced','failed') NOT NULL DEFAULT 'not_configured',
	`crmError` text,
	`crmSyncedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contactSubmissions_id` PRIMARY KEY(`id`)
);
