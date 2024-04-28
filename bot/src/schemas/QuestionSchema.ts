import { z } from 'zod';

const Formats = z.enum(['large', 'medium', 'small', 'thumbnail']);

const FormatSchema = z
  .object({
    ext: z.string(),
    hash: z.string(),
    height: z.number(),
    mime: z.string(),
    name: z.string(),
    path: z.string().nullable(),
    size: z.number(),
    sizeInBytes: z.number(),
    url: z.string(),
    width: z.number(),
  })
  .strict();

const RawQuestionSchema = z
  .object({
    content: z.string(),
    createdAt: z.string(),
    files: z
      .object({
        data: z
          .array(
            z
              .object({
                attributes: z
                  .object({
                    alternativeText: z.string().nullable(),
                    caption: z.string().nullable(),
                    createdAt: z.string(),
                    ext: z.string(),
                    formats: z.record(Formats, FormatSchema).nullable(),
                    hash: z.string(),
                    height: z.number().nullable(),
                    mime: z.string(),
                    name: z.string(),
                    previewUrl: z.string().nullable(),
                    provider: z.string(),
                    provider_metadata: z.string().nullable(),
                    size: z.number(),
                    updatedAt: z.string(),
                    url: z.string(),
                    width: z.number().nullable(),
                  })
                  .strict(),
                id: z.number(),
              })
              .strict(),
          )
          .nullable(),
      })
      .strict(),
    links: z.record(z.string()).nullable(),
    name: z.string(),
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
