import { utils as XLSX_Utils, read as XLSX_Read } from 'xlsx';
import XLSX from 'xlsx';

import type { WorkSheet } from 'xlsx';

export default function XlsxParse(file: File): Promise<Record<string, any>[]> {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const workbook = XLSX_Read(e.target?.result, {
          type: 'binary',
          cellDates: true,
        });
        const sheet1 = workbook.SheetNames[0];
        if (typeof sheet1 === 'undefined') reject('Empty Workbook! No Sheet Found');
        else {
          const worksheet = workbook.Sheets[sheet1] as WorkSheet;
          const data: Record<string, any>[] = XLSX_Utils.sheet_to_json(worksheet, { raw: false });
          resolve(data);
        }
      };
    } catch (error) {
      reject(error);
    }
  });
}

export const convertTableToExcel = (headers: any, data: any = []) => {
  var worksheet = XLSX.utils.json_to_sheet(data, { header: headers });
  var new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, worksheet, 'Template');
  XLSX.writeFile(new_workbook, 'Template Report.XLSX');
};
