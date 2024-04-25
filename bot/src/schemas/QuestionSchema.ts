import { z } from 'zod';

const RawQuestionSchema = z
  .object({
    Content: z.string(),
    createdAt: z.string(),
    Links: z.record(z.string()).nullable(),
    Name: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
  })
  .strict();

export const QuestionSchema = z
  .object({
    data: z.array(
      z
        .object({
          attributes: RawQuestionSchema,
          id: z.number(),
        })
        .strict(),
    ),
    meta: z
      .object({
        pagination: z
          .object({
            page: z.number(),
            pageCount: z.number(),
            pageSize: z.number(),
            total: z.number(),
          })
          .strict(),
      })
      .strict(),
  })
  .strict();

export type Question = z.infer<typeof RawQuestionSchema>;
