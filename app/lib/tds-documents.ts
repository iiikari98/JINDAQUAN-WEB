import { productGradeGroups } from "./product-grades";

export type TdsModel = {
  model: string;
  title: string;
  href: string;
  filename: string;
  description: string;
};

export type TdsProductGroup = {
  product: string;
  summary: string;
  models: TdsModel[];
};

function gradeFileName(grade: string) {
  return grade
    .toLowerCase()
    .replace(/\*/g, "star")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const tdsProductGroups: TdsProductGroup[] = productGradeGroups.map((group) => ({
  product: group.product,
  summary: group.summary,
  models: group.grades.map((grade) => {
    const filenameBase = gradeFileName(grade);

    return {
      model: grade,
      title: `${grade} ${group.product} TDS`,
      href: `/tds/${filenameBase}-tds.pdf`,
      filename: `${filenameBase}-tds.pdf`,
      description: `${grade} document request for ${group.product}.`,
    };
  }),
}));

export function getAllTdsModels() {
  return tdsProductGroups.flatMap((group) =>
    group.models.map((model) => ({
      ...model,
      product: group.product,
    })),
  );
}

export function findTdsDocument(product: string, model?: string) {
  const models = getAllTdsModels();
  if (model) {
    const byModel = models.find((document) => document.model === model);
    if (byModel) {
      return byModel;
    }
  }

  return models.find((document) => document.product === product);
}
