## Scalability Strategy

::: info How We Handle Growth
This page explains how eLoop easily keeps working as you add more recycling yards, more cameras, and more users.
:::


### Scaling Architecture Flow

```text
[Yard A: 2 Cameras] ──┐
                      ├──(Tiny Text Strings)──> [Traffic Router] ──> [Multiple FastAPI Servers]
[Yard B: 2 Cameras] ──┘                                                      │
                                                                       (Shared Load)
                                                                             ▼
                                                                  [PostgreSQL Database]
```


### Core Growth Rules

#### 1. Independent Yards
* **No Cloud Delays:** Adding a new yard does not slow down the rest of the system.
* **Local Brains:** Every sorting line uses its own Raspberry Pi 5 to process images locally.
* **Saved Bandwidth:** The system sends tiny text strings to the cloud instead of heavy images.

#### 2. Copy-and-Paste Servers
* **Traffic Control:** A router spreads out incoming user traffic evenly to prevent crashes.
* **Easy Adding:** If the platform gets too busy, we instantly boot up extra copies of our FastAPI server.

#### 3. Database Storage
* **Efficient Writing:** Incoming logs from the conveyor lines write into clean tables without locks.
* **Fast Searches:** Clean data indexing ensures the database stays fast as the item list grows.
