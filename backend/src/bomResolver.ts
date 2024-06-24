import { BomDto, BomInput, BomRecord, BomSearch, SearchObject, bomRecordToDto } from './types';
import * as BomService from './bomService';
// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		hello: () => 'world',
		allBoms: async (): Promise<BomDto[]> => BomService.findAllBoms(),
		findBom: async (_:any, bomSearch: BomSearch): Promise<BomDto[]> => BomService.findBom(bomSearch),
		bomById: async (_:any, id: any): Promise<Object> => BomService.findBomObjectById(id.id),
		mergeBoms: async (_:any, mergeInput: any): Promise<any> => {
			return BomService.exportMergedBom(mergeInput.ids, mergeInput.rebomOptions)},
		mergeAndStoreBoms: async (_:any, mergeInput: any): Promise<any> => {
			return BomService.mergeAndStoreBoms(mergeInput.ids, mergeInput.rebomOptions)},
	},
	Mutation: {
		addBom: async (_:any, bomInput: BomInput): Promise<BomRecord> => BomService.addBom(bomInput)
	}
}
export default resolvers;