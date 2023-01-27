import { json } from "@sveltejs/kit"
import AlipaySdk from 'alipay-sdk';
import AlipayFormData from 'alipay-sdk/lib/form';

/** @type {import('./$types').RequestHandler} */
export async function POST() {

    // dvpudg5189@sandbox.com
    // 普通公钥模式
    let alipaySdk = new AlipaySdk({
        // 参考下方 SDK 配置
        appId: 'YourAppId',
        privateKey: 'YourPrivateKey',
        gateway: 'https://openapi.alipaydev.com/gateway.do',
    });

    const bizContent = {
        out_trade_no: '1234567890',
        product_code: "FAST_INSTANT_TRADE_PAY",
        subject: '订单标题',     // 订单标题
        body: '订单描述',    // 订单描述
        total_amount: '1.00',
    }
    
    const formData = new AlipayFormData();
    formData.setMethod('get');
    formData.addField('bizContent', bizContent);

    const result = await alipaySdk.exec(
        'alipay.trade.page.pay', // 统一收单下单并支付页面接口
        {}, // api 请求的参数（包含“公共请求参数”和“业务参数”）
        { formData: formData },
    );

    return json({result});
}