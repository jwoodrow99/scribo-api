import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IndicesController {
  public async index(ctx: HttpContextContract) {
    const { request, response } = ctx

    try {
      // Logic
      response.status(200)
      response.send({
        message: 'Index',
      })
      return
    } catch (error) {
      response.status(500)
      response.send({
        message: 'Server error.',
      })
      return
    }
  }
}
