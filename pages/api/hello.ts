// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  readonly name: string;
};

const handler = (
  request: NextApiRequest,
  res: NextApiResponse<Data>
): number => {
  res.status(200).json({ name: 'John Doe' });

  return 200;
};

export default handler;
