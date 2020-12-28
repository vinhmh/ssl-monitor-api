import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const domains = await req.context.models.Domain.find();
  return res.send(users);
});

router.get('/:domainID', async (req, res) => {
  const domain = await req.context.models.Domain.findById(
    req.params.domainId,
  );
  return res.send(domain);
});

export default router;