/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc3527fa8a8cb84b9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fdb76e37f93b1c45668b3dec40659e26',

  PROVINCE: '云南',
  CITY: '永胜',

  USERS: [
    {
      // 想要发送的人的名字
      name: '早安呀，宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oiY2l6hxwsopGhj86wY__JcpP870',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'XRBKl7YyNfoR4M_IouXgE1egO4lQs2jMl1dOqTG3fTA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '我的', year: '2000', date: '12-27',
        },
        {
          type: '节日', name: '关于我们', year: '2023', date: '10-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2029-10-21' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'iasJppcLwdjUmLCOQJbARLcMOLMNYW0nmnvGWGdY8vU',

  CALLBACK_USERS: [
    {
      name: '推送完成',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oiY2l6hxwsopGhj86wY__JcpP870',
    }
  ],

}

module.exports = USER_CONFIG

