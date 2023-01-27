import { j as json } from "../../../../chunks/index.js";
import AlipaySdk from "alipay-sdk";
import AlipayFormData from "alipay-sdk/lib/form.js";
async function POST() {
  let alipaySdk = new AlipaySdk({
    // 参考下方 SDK 配置
    appId: "2021000119654363",
    privateKey: "MIIEpAIBAAKCAQEAoPtwwqY+TqWm7p3PZ0NIareWt9PaIs/i6Pi9PAdq8Rtxfbg02uaODMUxlvw3z6CHWC0T5uL8bZx/xTXCYwPQ93ypJkTANv81QURcoE9AJ5kpY3u+SoPljIxtTKLyAWrPv1P+tXwMuWiQy6NDficNUJ9D9n1ZtkxRj0IqYGlxZLSMfBgFP6b9zo211TbUn0LzebF1R9h5xdpFqkUE8VzdUk3gJTswLnMaSPnR4oHqcwXt/mqnOnceK28uzUFa2oYGBCVuq45/aW1sLXfy+nietnhFcDRNUDKma5NrVi604EBiVMGfRklN4Mzts22Rm/YGJR8AEvi3uvfUUQM+bwwGlwIDAQABAoIBACgUkk2UUH0KV1afqeze3p/bV8YrE+uI8MjqbUsN2b1wBMC1ZUt/Daz2R9N8tnSWVjxI9OSObSTpSxKRwPUgFR4ZRpAFnAnVXrACUkGDmciCJMDlJUquLi/hIrFq/HAH5POQ+SC8YvqiozJgUsSM+o6xKJ2tNfHibIgLhDt+5UGaIDmYqlqZRl/RBolcnjZoiAeO0uV07wwQCzPey/L65OL4WTlt2eT7htwRyPRMbIYSKYduqtaZy48g5FuCrh5jKKV27rcx57tSgEcPD6/NkdGe5Iap6+AoxqeMtfQeMs/DGGufMUPvY7I8Bz752hY0K+xtxkiRaNmmOKyyi0Ae+dkCgYEA6N1VA+3a585nrz7VIv7+Fk4uks0s4QSRGmgyG4A5IEgpfMYjVxWar1sSjVTYYUUGbbfnHSs+EDDSX1cjUQ3xkN1tcuq8DpddkA70SRN8dsRTjx0ilFryKfMsUvuOAScdQJdqSQBFj1GLAJULoGZujPLrAcOSU5wq3CiOYze0aF0CgYEAsPnazm94or8gWz1z+nhsLJJHDgcjVBVo32L9X52/EC24sdokXOd/EgZyYhhBHJJRyAM8UmvnjALbo0pD+wDSCXuCbvjusrIde/uhynWccUIhmnuydxP2B0RnMnKhOIxYnP+CJ4yXAjOTDB7SAkcs6eHE/0MGqjv3NxapWmHPK4MCgYEAkEXxEkofwlbjbnQjYVdS3Ub7HAD6uT83F4FO6jL7McED00Z/Rskf2V03lVDn7vvxC7FRA4VzIlzdOiymuOVGsVY/JV/Bu9iUI1jgiRYFmx/wFU8byYa/WrZK0+7/AD/Xo9ksBKaicjU3RdkSJwLPo4wthh5BXoP3GggWj+pHYBECgYEAgRZOZoNij/svI74oaYsLBFvSHkZQm5VeQIrY27SZV7ix3nCKU4W75y7yoeClJa0IoAbUKh5w72xqPqn9+gj4K1h+pGlI2ukWnofF1IKDEQ22qxMM8tSJgXWAfIimVjPwstugWS6wOzfZS17zuhumhBZc9gAyzVseEH2kG7v6O/cCgYBivM6RYGjKtSMtbl/mWxyyYe4mohXjGrPr50J3w7eSVdCHfvjDw2MGRxyWvzrX4ySSvw9SOQrHx50j/p727CAFsGHDvAkGg2sKWSAJphHt6pXFZ8Ykf0OVwUmAchUsvOc9Bo26+730/unZzd//9PTrjlLknCFZ7mtBD1mRkh0f8g==",
    gateway: "https://openapi.alipaydev.com/gateway.do"
  });
  const bizContent = {
    out_trade_no: "1234567890",
    product_code: "FAST_INSTANT_TRADE_PAY",
    subject: "订单标题",
    // 订单标题
    body: "订单描述",
    // 订单描述
    total_amount: "1.00"
  };
  const formData = new AlipayFormData();
  formData.setMethod("get");
  formData.addField("bizContent", bizContent);
  const result = await alipaySdk.exec(
    "alipay.trade.page.pay",
    // 统一收单下单并支付页面接口
    {},
    // api 请求的参数（包含“公共请求参数”和“业务参数”）
    { formData }
  );
  return json({ result });
}
export {
  POST
};
