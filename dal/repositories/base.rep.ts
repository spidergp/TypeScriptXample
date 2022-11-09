import { logConsole } from "../../utils/logger.js";

class BaseRepository {
	model: any;

	constructor(model: any) {
		this.model = model;
	}

	async getAll() {
		const data = await this.model.findAll({});
		const items = data.map((item: any) => {
			const id = item._id;
			delete item._doc._id;
			return {
				id,
				...item._doc,
			};
		});
		logConsole.info(`The items were getted with success`);
		return items;
	}

	async create(newItem: any) {
		const regularObjectNewItem = JSON.parse(JSON.stringify(newItem));
		const itemSaveModel = await new this.model(regularObjectNewItem);
		const { _id: id } = await itemSaveModel.save();
		logConsole.info(`Item created with id ${id}`);
		return id;
	}

	/*
	async getByPropertyValue(property:any, value:any) {
	    
		if (property === "id") {
			property = "_id";
		}
		const filter = {};
		filter[property] = value;
		const item = await this.model.findOne(filter);
		logConsole.info(
			`The item with ${property} ${value} was getted with success`
		);

		return item?._doc || item;
	}

	async getById(inputId:BigInt) {
		const response = await this.getByPropertyValue("id", inputId);
		return response;
	}

	async getByName(inputName:String) {
		const response = await this.getByPropertyValue("name", inputName);
		return response;
	}
	async getByEmail(inputEmail:String) {
		const response = await this.getByPropertyValue("email", inputEmail);
		return response;
	}

	

	async update(newItem: any, toUpdateId:BigInt) {
		const regularObjectNewItem = JSON.parse(JSON.stringify(newItem));
		const item = await this.model.updateOne(
			{ _id: toUpdateId },
			regularObjectNewItem
		);
		logConsole.info(`The item with id ${toUpdateId} was updated with success`);
		return item;
	}
	async updateByEmail(newItem:any, toUpdateEmail:String) {
		const regularObjectNewItem = JSON.parse(JSON.stringify(newItem));
		const item = await this.model.updateOne(
			{ email: toUpdateEmail },
			regularObjectNewItem
		);
		logConsole.info(
			`The item with email ${toUpdateEmail} was updated with success`
		);
		return item;
	}
	async deleteByPropertyValue(property: any, value:any) {
		if (property === "id") {
			property = "_id";
		}

		const filter = {};
		filter[property] = value;
		const { deletedCount } = await this.model.deleteOne(filter);

		if (deletedCount === 0) {
			throw new Error(`There isn't item with ${property} ${value}`);
		}
		logConsole.info(
			`The item with ${property} ${value} was deleted with success`
		);
		return deletedCount;
	}
	async deleteById(inputId) {
		const response = await this.deleteByPropertyValue("id", inputId);
		return response;
	}

	async deleteByName(inputName) {
		const response = await this.deleteByPropertyValue("name", inputName);
		return response;
	}

	async deleteByEmail(email) {
		const response = await this.deleteByPropertyValue("email", email);
		return response;
	}

	async deleteAll() {
		await this.model.deleteMany({});
		logConsole.info(`All the items were deleted with success`);
		return true;
	}

	async isPropertyValue(property:any, value:any) {
		const filter = {};
		filter[property] = value;
		const item = await this.model.find(filter);
		return item;
	}
	*/
}

export default BaseRepository;
