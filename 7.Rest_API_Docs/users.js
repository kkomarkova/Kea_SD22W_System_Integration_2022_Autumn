import { Router } from "express";

const router = Router();
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/users', (req, res) => {
    res.send({users:[]});
  });


export default router;