export class Randomizer<T> {
    private items: T[];
    private disabledItems: Set<T>;
    private randomizedItems: T[];

    constructor(items: T[]) {
        this.items = items;
        this.disabledItems = new Set();
        this.randomizedItems = [];
    }

    /**
     * Disables an item from being randomized.
     * @param item The item to disable.
     */
    disableItem(item: T): void {
        this.disabledItems.add(item);
    }

    /**
     * Enables an item that was previously disabled.
     * @param item The item to enable.
     */
    enableItem(item: T): void {
        this.disabledItems.delete(item);
    }

    /**
     * Randomizes the list and returns the specified number of unique items.
     * @param count Number of items to randomize.
     * @returns An array of randomized items.
     */
    randomize(count: number): T[] {
        const availableItems = this.items.filter(
            item => !this.disabledItems.has(item) && !this.randomizedItems.includes(item)
        );

        if (count > availableItems.length) {
            throw new Error("Not enough unique items to randomize the requested number.");
        }

        const selectedItems: T[] = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * availableItems.length);
            const selectedItem = availableItems.splice(randomIndex, 1)[0];
            selectedItems.push(selectedItem);
            this.randomizedItems.push(selectedItem);
        }

        return selectedItems;
    }

    /**
     * Runs the randomizer to return one unique item.
     * @returns A randomized item.
     */
    run(): T {
        const availableItems = this.items.filter(
            item => !this.disabledItems.has(item) && !this.randomizedItems.includes(item)
        );

        if (availableItems.length === 0) {
            throw new Error("No available items to randomize.");
        }

        const randomIndex = Math.floor(Math.random() * availableItems.length);
        const selectedItem = availableItems[randomIndex];
        this.randomizedItems.push(selectedItem);
        return selectedItem;
    }

    /**
     * Resets the randomizer, clearing the history of randomized items.
     */
    reset(): void {
        this.randomizedItems = [];
    }
}
