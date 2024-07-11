class GameSecretItem {
	constructor(itemId, isAchieved) {
		this.itemId = itemId;
		this.isAchieved = isAchieved;
	}
}

class UpdateCallback {
	/**
	 * @param {String} callbackId The id of callback.
	 * @param {Function} callback The callback function.
	 */
	constructor(callbackId, callback) {
		this.callbackId = callbackId;
		this.callback = callback;
	}
}

const itemsToAchieve = {
	FLetter: new GameSecretItem("f-letter"),
	PLetter: new GameSecretItem("p-letter"),
	TLetter: new GameSecretItem("t-letter"),
	ELetter: new GameSecretItem("e-letter"),
	DLetter: new GameSecretItem("d-letter"),
	ULetter: new GameSecretItem("u-letter")
};

const maxCollectedItems = 6;

class ItemBagManager {
	/**
	 * @param {GameSecretItem[]} gameSecretItems The bag of game secret item to manage.
	 * @param {Number} totalCollectedItems Number of items user has collected.
	 * @param {UpdateCallback[]} updateCallbacks The list of update callbacks.
	 */
	constructor(gameSecretItems, totalCollectedItems, updateCallbacks) {
		this.gameSecretItems = gameSecretItems;
		this.totalCollectedItems = totalCollectedItems;
		this.updateCallbacks = updateCallbacks;
	}

	getMaxCollectedItems() {
		return maxCollectedItems;
	}

	getTotalCollectedItems() {
		return this.totalCollectedItems;
	}

	addItem(itemId) {
		if (this.isAchievedById(itemId)) {
			return;
		}

		this.gameSecretItems.push(new GameSecretItem(itemId, true));
		this.totalCollectedItems++;
		this.updateItemBag();
	}

	/**
	 * Add the callback that will invoked when this item bag has updated.
	 * @param {String} callbackId The id of callback.
	 * @param {Function} callback The callback function.
	 */
	addUpdateCallback(callbackId, callback) {
		const isCallbackExisted = this.updateCallbacks.find(
			(item) => item.callbackId == callbackId
		);

		if (isCallbackExisted) {
			return;
		}

		this.updateCallbacks.push(new UpdateCallback(callbackId, callback));
	}

	removeCallback(callbackId) {
		let indexOfRemovedCallback = -1;
		this.updateCallbacks.find((item, index) => {
			if (item.callbackId == callbackId) {
				indexOfRemovedCallback = index;
				return item;
			}
		});

		if (indexOfRemovedCallback != -1) {
			this.updateCallbacks.splice(indexOfRemovedCallback, 1);
		}
	}

	updateItemBag() {
		this.updateCallbacks.forEach((item) => item.callback());
	}

	isAchievedById(itemId) {
		for (let i = 0; i < this.gameSecretItems.length; i++) {
			const item = this.gameSecretItems[i];

			if (item.itemId == itemId) {
				return true;
			}
		}

		return false;
	}
}

const manager = new ItemBagManager([], 0, []);

export default manager;
export { itemsToAchieve };
