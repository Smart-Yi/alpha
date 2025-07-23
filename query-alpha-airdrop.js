const targetPath = "/bapi/defi/v1/friendly/wallet-direct/buw/growth/query-alpha-airdrop";

if ($request.url.includes(targetPath)) {
  // 临时添加预览代码（调试后移除）
  console.log(`123`);
  try {
    let body = JSON.parse($response.body);
    // $notification.post("响应预览", "", JSON.stringify(body, null, 2));
    // 修改第一个 configs 的 displayStartTime（减 1 秒）
    if (body?.data?.configs?.[0]) {
      const originalTime = body.data.configs[0].displayStartTime;
      body.data.configs[0].displayStartTime -= 1000;
      
      console.log(`修改成功！原始时间: ${originalTime} → 新时间: ${body.data.configs[0].displayStartTime}`);
    }
    
    $done({ body: JSON.stringify(body) });
  } catch (e) {
    console.log(`处理失败: ${e.message}`);
    $done({});
  }
} else {
  $done({});
}
