import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();
  //id - Keys # videos -values()

  list() {
    return Array.from(this.#videos.values());
  }

  create(video) {
    const videoId = randomUUID;
    // UUID -> ID único universal

    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
