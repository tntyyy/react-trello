interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
}

class Storage<T extends string> {
    private readonly storage: IStorage;

    public constructor(getStorage = (): IStorage => window.localStorage) {
        this.storage = getStorage();
    }

    public get(key: T): string | null {
        return this.storage.getItem(key);
    }

    public set(key: T, value: string): void {
        this.storage.setItem(key, value);
    }

    public clear(key: T): void {
        this.storage.removeItem(key);
    }

    public clearAll(keys: T[]): void {
        keys.forEach((key) => this.clear(key));
    }
}

export default new Storage();