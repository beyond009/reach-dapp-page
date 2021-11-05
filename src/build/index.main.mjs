// Automatically generated with Reach 0.1.6 (fb449c94)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (fb449c94)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc4 = stdlib.T_Object({
    os: ctc3,
    xs: ctc3,
    xsTurn: ctc2
    });
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc4, ctc2],
      6: [ctc0, ctc1, ctc0, ctc4, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc4 = stdlib.T_Object({
    os: ctc3,
    xs: ctc3,
    xsTurn: ctc2
    });
  const ctc5 = stdlib.T_Null;
  
  
  const v1081 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v1082 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1082, v1081],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:243:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v1082, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v1086, v1087], secs: v1089, time: v1088, didSend: v41, from: v1085 } = txn1;
      
      sim_r.txns.push({
        amt: v1086,
        kind: 'to',
        tok: undefined
        });
      const v1093 = stdlib.add(v1088, v1087);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v1086, v1087], secs: v1089, time: v1088, didSend: v41, from: v1085 } = txn1;
  ;
  const v1093 = stdlib.add(v1088, v1087);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v1093],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v1085, v1086, v1093],
      evt_cnt: 0,
      funcNum: 2,
      lct: v1088,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v1536, time: v1535, didSend: v1052, from: v1534 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v1538 = stdlib.addressEq(v1085, v1534);
        stdlib.assert(v1538, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:249:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v1086,
          kind: 'from',
          to: v1085,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1536, time: v1535, didSend: v1052, from: v1534 } = txn3;
    ;
    const v1538 = stdlib.addressEq(v1085, v1534);
    stdlib.assert(v1538, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:249:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc5, await interact.informTimeout(), {
      at: './index.rsh:235:29:application',
      fs: ['at ./index.rsh:234:9:application call to [unknown function] (defined at: ./index.rsh:234:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:233:28:function exp)', 'at ./index.rsh:249:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v1099, time: v1098, didSend: v50, from: v1097 } = txn2;
    ;
    const v1105 = [false, false, false, false, false, false, false, false, false];
    const v1106 = [false, false, false, false, false, false, false, false, false];
    const v1107 = {
      os: v1105,
      xs: v1106,
      xsTurn: true
      };
    let v1108 = v1107;
    let v1109 = v1098;
    
    while ((() => {
      const v1120 = v1108.xs;
      const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
      const v1122 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
      const v1123 = v1121 ? v1122 : false;
      const v1124 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
      const v1125 = v1123 ? v1124 : false;
      const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
      const v1127 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
      const v1128 = v1126 ? v1127 : false;
      const v1129 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
      const v1130 = v1128 ? v1129 : false;
      const v1131 = v1125 ? true : v1130;
      const v1132 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
      const v1133 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
      const v1134 = v1132 ? v1133 : false;
      const v1135 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
      const v1136 = v1134 ? v1135 : false;
      const v1137 = v1131 ? true : v1136;
      const v1140 = v1121 ? v1126 : false;
      const v1142 = v1140 ? v1132 : false;
      const v1143 = v1137 ? true : v1142;
      const v1146 = v1122 ? v1127 : false;
      const v1148 = v1146 ? v1133 : false;
      const v1149 = v1143 ? true : v1148;
      const v1152 = v1124 ? v1129 : false;
      const v1154 = v1152 ? v1135 : false;
      const v1155 = v1149 ? true : v1154;
      const v1158 = v1121 ? v1127 : false;
      const v1160 = v1158 ? v1135 : false;
      const v1161 = v1155 ? true : v1160;
      const v1164 = v1124 ? v1127 : false;
      const v1166 = v1164 ? v1132 : false;
      const v1167 = v1161 ? true : v1166;
      const v1168 = v1108.os;
      const v1169 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
      const v1170 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
      const v1171 = v1169 ? v1170 : false;
      const v1172 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
      const v1173 = v1171 ? v1172 : false;
      const v1174 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
      const v1175 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
      const v1176 = v1174 ? v1175 : false;
      const v1177 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
      const v1178 = v1176 ? v1177 : false;
      const v1179 = v1173 ? true : v1178;
      const v1180 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
      const v1181 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
      const v1182 = v1180 ? v1181 : false;
      const v1183 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
      const v1184 = v1182 ? v1183 : false;
      const v1185 = v1179 ? true : v1184;
      const v1188 = v1169 ? v1174 : false;
      const v1190 = v1188 ? v1180 : false;
      const v1191 = v1185 ? true : v1190;
      const v1194 = v1170 ? v1175 : false;
      const v1196 = v1194 ? v1181 : false;
      const v1197 = v1191 ? true : v1196;
      const v1200 = v1172 ? v1177 : false;
      const v1202 = v1200 ? v1183 : false;
      const v1203 = v1197 ? true : v1202;
      const v1206 = v1169 ? v1175 : false;
      const v1208 = v1206 ? v1183 : false;
      const v1209 = v1203 ? true : v1208;
      const v1212 = v1172 ? v1175 : false;
      const v1214 = v1212 ? v1180 : false;
      const v1215 = v1209 ? true : v1214;
      const v1216 = v1167 ? true : v1215;
      const v1222 = v1121 ? true : v1169;
      const v1227 = v1122 ? true : v1170;
      const v1232 = v1124 ? true : v1172;
      const v1237 = v1126 ? true : v1174;
      const v1242 = v1127 ? true : v1175;
      const v1247 = v1129 ? true : v1177;
      const v1252 = v1132 ? true : v1180;
      const v1257 = v1133 ? true : v1181;
      const v1262 = v1135 ? true : v1183;
      const v1265 = v1222 ? v1227 : false;
      const v1266 = v1265 ? v1232 : false;
      const v1267 = v1266 ? v1237 : false;
      const v1268 = v1267 ? v1242 : false;
      const v1269 = v1268 ? v1247 : false;
      const v1270 = v1269 ? v1252 : false;
      const v1271 = v1270 ? v1257 : false;
      const v1272 = v1271 ? v1262 : false;
      const v1273 = v1216 ? true : v1272;
      const v1274 = v1273 ? false : true;
      
      return v1274;})()) {
      const v1275 = v1108.xsTurn;
      if (v1275) {
        const v1278 = stdlib.protect(ctc0, await interact.getMove(v1108), {
          at: './index.rsh:191:30:application',
          fs: ['at ./index.rsh:258:35:application call to "getValidMove" (defined at: ./index.rsh:190:1:function exp)', 'at ./index.rsh:257:17:application call to [unknown function] (defined at: ./index.rsh:257:21:function exp)'],
          msg: 'getMove',
          who: 'Alice'
          });
        const v1279 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1278);
        const v1280 = stdlib.lt(v1278, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
        const v1281 = v1279 ? v1280 : false;
        stdlib.assert(v1281, {
          at: './index.rsh:192:9:application',
          fs: ['at ./index.rsh:258:35:application call to "getValidMove" (defined at: ./index.rsh:190:1:function exp)', 'at ./index.rsh:257:17:application call to [unknown function] (defined at: ./index.rsh:257:21:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v1282 = v1108.xs;
        const v1284 = v1282[v1278];
        let v1285;
        if (v1284) {
          v1285 = true;
          }
        else {
          const v1286 = v1108.os;
          const v1288 = v1286[v1278];
          v1285 = v1288;
          }
        const v1289 = v1285 ? false : true;
        stdlib.assert(v1289, {
          at: './index.rsh:193:9:application',
          fs: ['at ./index.rsh:258:35:application call to "getValidMove" (defined at: ./index.rsh:190:1:function exp)', 'at ./index.rsh:257:17:application call to [unknown function] (defined at: ./index.rsh:257:21:function exp)'],
          msg: null,
          who: 'Alice'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v1085, v1086, v1097, v1108, v1275, v1278],
          evt_cnt: 1,
          funcNum: 4,
          lct: v1109,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [v1291], secs: v1293, time: v1292, didSend: v495, from: v1290 } = txn3;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v1295 = stdlib.addressEq(v1085, v1290);
            stdlib.assert(v1295, {
              at: './index.rsh:260:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v1296 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1291);
            const v1297 = stdlib.lt(v1291, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
            const v1298 = v1296 ? v1297 : false;
            stdlib.assert(v1298, {
              at: './index.rsh:198:10:application',
              fs: ['at ./index.rsh:262:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v1301 = v1282[v1291];
            let v1302;
            if (v1301) {
              v1302 = true;
              }
            else {
              const v1303 = v1108.os;
              const v1305 = v1303[v1291];
              v1302 = v1305;
              }
            const v1306 = v1302 ? false : true;
            stdlib.assert(v1306, {
              at: './index.rsh:199:10:application',
              fs: ['at ./index.rsh:262:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v1308 = v1275 ? false : true;
            let v1309;
            if (v1275) {
              const v1312 = stdlib.Array_set(v1282, v1291, true);
              v1309 = v1312;
              }
            else {
              v1309 = v1282;
              }
            let v1314;
            if (v1275) {
              const v1315 = v1108.os;
              v1314 = v1315;
              }
            else {
              const v1316 = v1108.os;
              const v1318 = stdlib.Array_set(v1316, v1291, true);
              v1314 = v1318;
              }
            const v1320 = {
              os: v1314,
              xs: v1309,
              xsTurn: v1308
              };
            const cv1108 = v1320;
            const cv1109 = v1292;
            
            (() => {
              const v1108 = cv1108;
              const v1109 = cv1109;
              
              if ((() => {
                const v1120 = v1108.xs;
                const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1122 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1123 = v1121 ? v1122 : false;
                const v1124 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1125 = v1123 ? v1124 : false;
                const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1127 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1128 = v1126 ? v1127 : false;
                const v1129 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1130 = v1128 ? v1129 : false;
                const v1131 = v1125 ? true : v1130;
                const v1132 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1133 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1134 = v1132 ? v1133 : false;
                const v1135 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1136 = v1134 ? v1135 : false;
                const v1137 = v1131 ? true : v1136;
                const v1140 = v1121 ? v1126 : false;
                const v1142 = v1140 ? v1132 : false;
                const v1143 = v1137 ? true : v1142;
                const v1146 = v1122 ? v1127 : false;
                const v1148 = v1146 ? v1133 : false;
                const v1149 = v1143 ? true : v1148;
                const v1152 = v1124 ? v1129 : false;
                const v1154 = v1152 ? v1135 : false;
                const v1155 = v1149 ? true : v1154;
                const v1158 = v1121 ? v1127 : false;
                const v1160 = v1158 ? v1135 : false;
                const v1161 = v1155 ? true : v1160;
                const v1164 = v1124 ? v1127 : false;
                const v1166 = v1164 ? v1132 : false;
                const v1167 = v1161 ? true : v1166;
                const v1168 = v1108.os;
                const v1169 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1170 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1171 = v1169 ? v1170 : false;
                const v1172 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1173 = v1171 ? v1172 : false;
                const v1174 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1175 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1176 = v1174 ? v1175 : false;
                const v1177 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1178 = v1176 ? v1177 : false;
                const v1179 = v1173 ? true : v1178;
                const v1180 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1181 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1182 = v1180 ? v1181 : false;
                const v1183 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1184 = v1182 ? v1183 : false;
                const v1185 = v1179 ? true : v1184;
                const v1188 = v1169 ? v1174 : false;
                const v1190 = v1188 ? v1180 : false;
                const v1191 = v1185 ? true : v1190;
                const v1194 = v1170 ? v1175 : false;
                const v1196 = v1194 ? v1181 : false;
                const v1197 = v1191 ? true : v1196;
                const v1200 = v1172 ? v1177 : false;
                const v1202 = v1200 ? v1183 : false;
                const v1203 = v1197 ? true : v1202;
                const v1206 = v1169 ? v1175 : false;
                const v1208 = v1206 ? v1183 : false;
                const v1209 = v1203 ? true : v1208;
                const v1212 = v1172 ? v1175 : false;
                const v1214 = v1212 ? v1180 : false;
                const v1215 = v1209 ? true : v1214;
                const v1216 = v1167 ? true : v1215;
                const v1222 = v1121 ? true : v1169;
                const v1227 = v1122 ? true : v1170;
                const v1232 = v1124 ? true : v1172;
                const v1237 = v1126 ? true : v1174;
                const v1242 = v1127 ? true : v1175;
                const v1247 = v1129 ? true : v1177;
                const v1252 = v1132 ? true : v1180;
                const v1257 = v1133 ? true : v1181;
                const v1262 = v1135 ? true : v1183;
                const v1265 = v1222 ? v1227 : false;
                const v1266 = v1265 ? v1232 : false;
                const v1267 = v1266 ? v1237 : false;
                const v1268 = v1267 ? v1242 : false;
                const v1269 = v1268 ? v1247 : false;
                const v1270 = v1269 ? v1252 : false;
                const v1271 = v1270 ? v1257 : false;
                const v1272 = v1271 ? v1262 : false;
                const v1273 = v1216 ? true : v1272;
                const v1274 = v1273 ? false : true;
                
                return v1274;})()) {
                const v1275 = v1108.xsTurn;
                if (v1275) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                const v1366 = v1108.xs;
                const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1368 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1369 = v1367 ? v1368 : false;
                const v1370 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1371 = v1369 ? v1370 : false;
                const v1372 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1373 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1374 = v1372 ? v1373 : false;
                const v1375 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1376 = v1374 ? v1375 : false;
                const v1377 = v1371 ? true : v1376;
                const v1378 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1379 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1380 = v1378 ? v1379 : false;
                const v1381 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1382 = v1380 ? v1381 : false;
                const v1383 = v1377 ? true : v1382;
                const v1386 = v1367 ? v1372 : false;
                const v1388 = v1386 ? v1378 : false;
                const v1389 = v1383 ? true : v1388;
                const v1392 = v1368 ? v1373 : false;
                const v1394 = v1392 ? v1379 : false;
                const v1395 = v1389 ? true : v1394;
                const v1398 = v1370 ? v1375 : false;
                const v1400 = v1398 ? v1381 : false;
                const v1401 = v1395 ? true : v1400;
                const v1404 = v1367 ? v1373 : false;
                const v1406 = v1404 ? v1381 : false;
                const v1407 = v1401 ? true : v1406;
                const v1410 = v1370 ? v1373 : false;
                const v1412 = v1410 ? v1378 : false;
                const v1413 = v1407 ? true : v1412;
                const v1414 = v1108.os;
                const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1416 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1417 = v1415 ? v1416 : false;
                const v1418 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1419 = v1417 ? v1418 : false;
                const v1420 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1421 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1422 = v1420 ? v1421 : false;
                const v1423 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1424 = v1422 ? v1423 : false;
                const v1425 = v1419 ? true : v1424;
                const v1426 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1427 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1428 = v1426 ? v1427 : false;
                const v1429 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1430 = v1428 ? v1429 : false;
                const v1431 = v1425 ? true : v1430;
                const v1434 = v1415 ? v1420 : false;
                const v1436 = v1434 ? v1426 : false;
                const v1437 = v1431 ? true : v1436;
                const v1440 = v1416 ? v1421 : false;
                const v1442 = v1440 ? v1427 : false;
                const v1443 = v1437 ? true : v1442;
                const v1446 = v1418 ? v1423 : false;
                const v1448 = v1446 ? v1429 : false;
                const v1449 = v1443 ? true : v1448;
                const v1452 = v1415 ? v1421 : false;
                const v1454 = v1452 ? v1429 : false;
                const v1455 = v1449 ? true : v1454;
                const v1458 = v1418 ? v1421 : false;
                const v1460 = v1458 ? v1426 : false;
                const v1461 = v1455 ? true : v1460;
                const v1462 = [stdlib.checkedBigNumberify('./index.rsh:280:8:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:280:11:decimal', stdlib.UInt_max, 2)];
                const v1463 = [stdlib.checkedBigNumberify('./index.rsh:281:8:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:281:11:decimal', stdlib.UInt_max, 1)];
                const v1464 = v1461 ? v1462 : v1463;
                const v1465 = [stdlib.checkedBigNumberify('./index.rsh:278:8:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:278:11:decimal', stdlib.UInt_max, 0)];
                const v1466 = v1413 ? v1465 : v1464;
                const v1467 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 0)];
                const v1468 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 1)];
                const v1469 = stdlib.mul(v1467, v1086);
                sim_r.txns.push({
                  amt: v1469,
                  kind: 'from',
                  to: v1085,
                  tok: undefined
                  });
                const v1474 = stdlib.mul(v1468, v1086);
                sim_r.txns.push({
                  amt: v1474,
                  kind: 'from',
                  to: v1097,
                  tok: undefined
                  });
                const v1527 = v1413 ? stdlib.checkedBigNumberify('./index.rsh:285:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:45:decimal', stdlib.UInt_max, 0);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc1, ctc0, ctc1, ctc4, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v1291], secs: v1293, time: v1292, didSend: v495, from: v1290 } = txn3;
        ;
        const v1295 = stdlib.addressEq(v1085, v1290);
        stdlib.assert(v1295, {
          at: './index.rsh:260:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1296 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1291);
        const v1297 = stdlib.lt(v1291, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
        const v1298 = v1296 ? v1297 : false;
        stdlib.assert(v1298, {
          at: './index.rsh:198:10:application',
          fs: ['at ./index.rsh:262:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v1301 = v1282[v1291];
        let v1302;
        if (v1301) {
          v1302 = true;
          }
        else {
          const v1303 = v1108.os;
          const v1305 = v1303[v1291];
          v1302 = v1305;
          }
        const v1306 = v1302 ? false : true;
        stdlib.assert(v1306, {
          at: './index.rsh:199:10:application',
          fs: ['at ./index.rsh:262:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v1308 = v1275 ? false : true;
        let v1309;
        if (v1275) {
          const v1312 = stdlib.Array_set(v1282, v1291, true);
          v1309 = v1312;
          }
        else {
          v1309 = v1282;
          }
        let v1314;
        if (v1275) {
          const v1315 = v1108.os;
          v1314 = v1315;
          }
        else {
          const v1316 = v1108.os;
          const v1318 = stdlib.Array_set(v1316, v1291, true);
          v1314 = v1318;
          }
        const v1320 = {
          os: v1314,
          xs: v1309,
          xsTurn: v1308
          };
        const cv1108 = v1320;
        const cv1109 = v1292;
        
        v1108 = cv1108;
        v1109 = cv1109;
        
        continue;
        
        }
      else {
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 5,
          out_tys: [ctc0],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [v1336], secs: v1338, time: v1337, didSend: v553, from: v1335 } = txn3;
        ;
        const v1340 = stdlib.addressEq(v1097, v1335);
        stdlib.assert(v1340, {
          at: './index.rsh:270:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1341 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1336);
        const v1342 = stdlib.lt(v1336, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
        const v1343 = v1341 ? v1342 : false;
        stdlib.assert(v1343, {
          at: './index.rsh:198:10:application',
          fs: ['at ./index.rsh:272:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v1344 = v1108.xs;
        const v1346 = v1344[v1336];
        let v1347;
        if (v1346) {
          v1347 = true;
          }
        else {
          const v1348 = v1108.os;
          const v1350 = v1348[v1336];
          v1347 = v1350;
          }
        const v1351 = v1347 ? false : true;
        stdlib.assert(v1351, {
          at: './index.rsh:199:10:application',
          fs: ['at ./index.rsh:272:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v1353 = v1275 ? false : true;
        let v1354;
        if (v1275) {
          const v1357 = stdlib.Array_set(v1344, v1336, true);
          v1354 = v1357;
          }
        else {
          v1354 = v1344;
          }
        let v1359;
        if (v1275) {
          const v1360 = v1108.os;
          v1359 = v1360;
          }
        else {
          const v1361 = v1108.os;
          const v1363 = stdlib.Array_set(v1361, v1336, true);
          v1359 = v1363;
          }
        const v1365 = {
          os: v1359,
          xs: v1354,
          xsTurn: v1353
          };
        const cv1108 = v1365;
        const cv1109 = v1337;
        
        v1108 = cv1108;
        v1109 = cv1109;
        
        continue;
        
        }}
    const v1366 = v1108.xs;
    const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
    const v1368 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
    const v1369 = v1367 ? v1368 : false;
    const v1370 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
    const v1371 = v1369 ? v1370 : false;
    const v1372 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
    const v1373 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
    const v1374 = v1372 ? v1373 : false;
    const v1375 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
    const v1376 = v1374 ? v1375 : false;
    const v1377 = v1371 ? true : v1376;
    const v1378 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
    const v1379 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
    const v1380 = v1378 ? v1379 : false;
    const v1381 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
    const v1382 = v1380 ? v1381 : false;
    const v1383 = v1377 ? true : v1382;
    const v1386 = v1367 ? v1372 : false;
    const v1388 = v1386 ? v1378 : false;
    const v1389 = v1383 ? true : v1388;
    const v1392 = v1368 ? v1373 : false;
    const v1394 = v1392 ? v1379 : false;
    const v1395 = v1389 ? true : v1394;
    const v1398 = v1370 ? v1375 : false;
    const v1400 = v1398 ? v1381 : false;
    const v1401 = v1395 ? true : v1400;
    const v1404 = v1367 ? v1373 : false;
    const v1406 = v1404 ? v1381 : false;
    const v1407 = v1401 ? true : v1406;
    const v1410 = v1370 ? v1373 : false;
    const v1412 = v1410 ? v1378 : false;
    const v1413 = v1407 ? true : v1412;
    const v1414 = v1108.os;
    const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
    const v1416 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
    const v1417 = v1415 ? v1416 : false;
    const v1418 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
    const v1419 = v1417 ? v1418 : false;
    const v1420 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
    const v1421 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
    const v1422 = v1420 ? v1421 : false;
    const v1423 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
    const v1424 = v1422 ? v1423 : false;
    const v1425 = v1419 ? true : v1424;
    const v1426 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
    const v1427 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
    const v1428 = v1426 ? v1427 : false;
    const v1429 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
    const v1430 = v1428 ? v1429 : false;
    const v1431 = v1425 ? true : v1430;
    const v1434 = v1415 ? v1420 : false;
    const v1436 = v1434 ? v1426 : false;
    const v1437 = v1431 ? true : v1436;
    const v1440 = v1416 ? v1421 : false;
    const v1442 = v1440 ? v1427 : false;
    const v1443 = v1437 ? true : v1442;
    const v1446 = v1418 ? v1423 : false;
    const v1448 = v1446 ? v1429 : false;
    const v1449 = v1443 ? true : v1448;
    const v1452 = v1415 ? v1421 : false;
    const v1454 = v1452 ? v1429 : false;
    const v1455 = v1449 ? true : v1454;
    const v1458 = v1418 ? v1421 : false;
    const v1460 = v1458 ? v1426 : false;
    const v1461 = v1455 ? true : v1460;
    const v1462 = [stdlib.checkedBigNumberify('./index.rsh:280:8:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:280:11:decimal', stdlib.UInt_max, 2)];
    const v1463 = [stdlib.checkedBigNumberify('./index.rsh:281:8:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:281:11:decimal', stdlib.UInt_max, 1)];
    const v1464 = v1461 ? v1462 : v1463;
    const v1465 = [stdlib.checkedBigNumberify('./index.rsh:278:8:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:278:11:decimal', stdlib.UInt_max, 0)];
    const v1466 = v1413 ? v1465 : v1464;
    const v1467 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 0)];
    const v1468 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 1)];
    const v1469 = stdlib.mul(v1467, v1086);
    ;
    const v1474 = stdlib.mul(v1468, v1086);
    ;
    const v1527 = v1413 ? stdlib.checkedBigNumberify('./index.rsh:285:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:45:decimal', stdlib.UInt_max, 0);
    stdlib.protect(ctc5, await interact.seeOutcome(v1527), {
      at: './index.rsh:287:24:application',
      fs: ['at ./index.rsh:286:7:application call to [unknown function] (defined at: ./index.rsh:286:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc5 = stdlib.T_Object({
    os: ctc4,
    xs: ctc4,
    xsTurn: ctc3
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1086, v1087], secs: v1089, time: v1088, didSend: v41, from: v1085 } = txn1;
  ;
  const v1093 = stdlib.add(v1088, v1087);
  stdlib.protect(ctc1, await interact.acceptWager(v1086), {
    at: './index.rsh:247:25:application',
    fs: ['at ./index.rsh:246:11:application call to [unknown function] (defined at: ./index.rsh:246:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1085, v1086, v1093],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1088,
    onlyIf: true,
    out_tys: [],
    pay: [v1086, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1099, time: v1098, didSend: v50, from: v1097 } = txn2;
      
      sim_r.txns.push({
        amt: v1086,
        kind: 'to',
        tok: undefined
        });
      const v1105 = [false, false, false, false, false, false, false, false, false];
      const v1106 = [false, false, false, false, false, false, false, false, false];
      const v1107 = {
        os: v1105,
        xs: v1106,
        xsTurn: true
        };
      const v1108 = v1107;
      const v1109 = v1098;
      
      if ((() => {
        const v1120 = v1108.xs;
        const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
        const v1122 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
        const v1123 = v1121 ? v1122 : false;
        const v1124 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
        const v1125 = v1123 ? v1124 : false;
        const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
        const v1127 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
        const v1128 = v1126 ? v1127 : false;
        const v1129 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
        const v1130 = v1128 ? v1129 : false;
        const v1131 = v1125 ? true : v1130;
        const v1132 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
        const v1133 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
        const v1134 = v1132 ? v1133 : false;
        const v1135 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
        const v1136 = v1134 ? v1135 : false;
        const v1137 = v1131 ? true : v1136;
        const v1140 = v1121 ? v1126 : false;
        const v1142 = v1140 ? v1132 : false;
        const v1143 = v1137 ? true : v1142;
        const v1146 = v1122 ? v1127 : false;
        const v1148 = v1146 ? v1133 : false;
        const v1149 = v1143 ? true : v1148;
        const v1152 = v1124 ? v1129 : false;
        const v1154 = v1152 ? v1135 : false;
        const v1155 = v1149 ? true : v1154;
        const v1158 = v1121 ? v1127 : false;
        const v1160 = v1158 ? v1135 : false;
        const v1161 = v1155 ? true : v1160;
        const v1164 = v1124 ? v1127 : false;
        const v1166 = v1164 ? v1132 : false;
        const v1167 = v1161 ? true : v1166;
        const v1168 = v1108.os;
        const v1169 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
        const v1170 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
        const v1171 = v1169 ? v1170 : false;
        const v1172 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
        const v1173 = v1171 ? v1172 : false;
        const v1174 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
        const v1175 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
        const v1176 = v1174 ? v1175 : false;
        const v1177 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
        const v1178 = v1176 ? v1177 : false;
        const v1179 = v1173 ? true : v1178;
        const v1180 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
        const v1181 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
        const v1182 = v1180 ? v1181 : false;
        const v1183 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
        const v1184 = v1182 ? v1183 : false;
        const v1185 = v1179 ? true : v1184;
        const v1188 = v1169 ? v1174 : false;
        const v1190 = v1188 ? v1180 : false;
        const v1191 = v1185 ? true : v1190;
        const v1194 = v1170 ? v1175 : false;
        const v1196 = v1194 ? v1181 : false;
        const v1197 = v1191 ? true : v1196;
        const v1200 = v1172 ? v1177 : false;
        const v1202 = v1200 ? v1183 : false;
        const v1203 = v1197 ? true : v1202;
        const v1206 = v1169 ? v1175 : false;
        const v1208 = v1206 ? v1183 : false;
        const v1209 = v1203 ? true : v1208;
        const v1212 = v1172 ? v1175 : false;
        const v1214 = v1212 ? v1180 : false;
        const v1215 = v1209 ? true : v1214;
        const v1216 = v1167 ? true : v1215;
        const v1222 = v1121 ? true : v1169;
        const v1227 = v1122 ? true : v1170;
        const v1232 = v1124 ? true : v1172;
        const v1237 = v1126 ? true : v1174;
        const v1242 = v1127 ? true : v1175;
        const v1247 = v1129 ? true : v1177;
        const v1252 = v1132 ? true : v1180;
        const v1257 = v1133 ? true : v1181;
        const v1262 = v1135 ? true : v1183;
        const v1265 = v1222 ? v1227 : false;
        const v1266 = v1265 ? v1232 : false;
        const v1267 = v1266 ? v1237 : false;
        const v1268 = v1267 ? v1242 : false;
        const v1269 = v1268 ? v1247 : false;
        const v1270 = v1269 ? v1252 : false;
        const v1271 = v1270 ? v1257 : false;
        const v1272 = v1271 ? v1262 : false;
        const v1273 = v1216 ? true : v1272;
        const v1274 = v1273 ? false : true;
        
        return v1274;})()) {
        const v1275 = v1108.xsTurn;
        if (v1275) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v1366 = v1108.xs;
        const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
        const v1368 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
        const v1369 = v1367 ? v1368 : false;
        const v1370 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
        const v1371 = v1369 ? v1370 : false;
        const v1372 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
        const v1373 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
        const v1374 = v1372 ? v1373 : false;
        const v1375 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
        const v1376 = v1374 ? v1375 : false;
        const v1377 = v1371 ? true : v1376;
        const v1378 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
        const v1379 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
        const v1380 = v1378 ? v1379 : false;
        const v1381 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
        const v1382 = v1380 ? v1381 : false;
        const v1383 = v1377 ? true : v1382;
        const v1386 = v1367 ? v1372 : false;
        const v1388 = v1386 ? v1378 : false;
        const v1389 = v1383 ? true : v1388;
        const v1392 = v1368 ? v1373 : false;
        const v1394 = v1392 ? v1379 : false;
        const v1395 = v1389 ? true : v1394;
        const v1398 = v1370 ? v1375 : false;
        const v1400 = v1398 ? v1381 : false;
        const v1401 = v1395 ? true : v1400;
        const v1404 = v1367 ? v1373 : false;
        const v1406 = v1404 ? v1381 : false;
        const v1407 = v1401 ? true : v1406;
        const v1410 = v1370 ? v1373 : false;
        const v1412 = v1410 ? v1378 : false;
        const v1413 = v1407 ? true : v1412;
        const v1414 = v1108.os;
        const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
        const v1416 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
        const v1417 = v1415 ? v1416 : false;
        const v1418 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
        const v1419 = v1417 ? v1418 : false;
        const v1420 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
        const v1421 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
        const v1422 = v1420 ? v1421 : false;
        const v1423 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
        const v1424 = v1422 ? v1423 : false;
        const v1425 = v1419 ? true : v1424;
        const v1426 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
        const v1427 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
        const v1428 = v1426 ? v1427 : false;
        const v1429 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
        const v1430 = v1428 ? v1429 : false;
        const v1431 = v1425 ? true : v1430;
        const v1434 = v1415 ? v1420 : false;
        const v1436 = v1434 ? v1426 : false;
        const v1437 = v1431 ? true : v1436;
        const v1440 = v1416 ? v1421 : false;
        const v1442 = v1440 ? v1427 : false;
        const v1443 = v1437 ? true : v1442;
        const v1446 = v1418 ? v1423 : false;
        const v1448 = v1446 ? v1429 : false;
        const v1449 = v1443 ? true : v1448;
        const v1452 = v1415 ? v1421 : false;
        const v1454 = v1452 ? v1429 : false;
        const v1455 = v1449 ? true : v1454;
        const v1458 = v1418 ? v1421 : false;
        const v1460 = v1458 ? v1426 : false;
        const v1461 = v1455 ? true : v1460;
        const v1462 = [stdlib.checkedBigNumberify('./index.rsh:280:8:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:280:11:decimal', stdlib.UInt_max, 2)];
        const v1463 = [stdlib.checkedBigNumberify('./index.rsh:281:8:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:281:11:decimal', stdlib.UInt_max, 1)];
        const v1464 = v1461 ? v1462 : v1463;
        const v1465 = [stdlib.checkedBigNumberify('./index.rsh:278:8:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:278:11:decimal', stdlib.UInt_max, 0)];
        const v1466 = v1413 ? v1465 : v1464;
        const v1467 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 0)];
        const v1468 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 1)];
        const v1469 = stdlib.mul(v1467, v1086);
        sim_r.txns.push({
          amt: v1469,
          kind: 'from',
          to: v1085,
          tok: undefined
          });
        const v1474 = stdlib.mul(v1468, v1086);
        sim_r.txns.push({
          amt: v1474,
          kind: 'from',
          to: v1097,
          tok: undefined
          });
        const v1527 = v1413 ? stdlib.checkedBigNumberify('./index.rsh:285:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:45:decimal', stdlib.UInt_max, 0);
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v1093],
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1536, time: v1535, didSend: v1052, from: v1534 } = txn3;
    ;
    const v1538 = stdlib.addressEq(v1085, v1534);
    stdlib.assert(v1538, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:249:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:235:29:application',
      fs: ['at ./index.rsh:234:9:application call to [unknown function] (defined at: ./index.rsh:234:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:233:28:function exp)', 'at ./index.rsh:249:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v1099, time: v1098, didSend: v50, from: v1097 } = txn2;
    ;
    const v1105 = [false, false, false, false, false, false, false, false, false];
    const v1106 = [false, false, false, false, false, false, false, false, false];
    const v1107 = {
      os: v1105,
      xs: v1106,
      xsTurn: true
      };
    let v1108 = v1107;
    let v1109 = v1098;
    
    while ((() => {
      const v1120 = v1108.xs;
      const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
      const v1122 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
      const v1123 = v1121 ? v1122 : false;
      const v1124 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
      const v1125 = v1123 ? v1124 : false;
      const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
      const v1127 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
      const v1128 = v1126 ? v1127 : false;
      const v1129 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
      const v1130 = v1128 ? v1129 : false;
      const v1131 = v1125 ? true : v1130;
      const v1132 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
      const v1133 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
      const v1134 = v1132 ? v1133 : false;
      const v1135 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
      const v1136 = v1134 ? v1135 : false;
      const v1137 = v1131 ? true : v1136;
      const v1140 = v1121 ? v1126 : false;
      const v1142 = v1140 ? v1132 : false;
      const v1143 = v1137 ? true : v1142;
      const v1146 = v1122 ? v1127 : false;
      const v1148 = v1146 ? v1133 : false;
      const v1149 = v1143 ? true : v1148;
      const v1152 = v1124 ? v1129 : false;
      const v1154 = v1152 ? v1135 : false;
      const v1155 = v1149 ? true : v1154;
      const v1158 = v1121 ? v1127 : false;
      const v1160 = v1158 ? v1135 : false;
      const v1161 = v1155 ? true : v1160;
      const v1164 = v1124 ? v1127 : false;
      const v1166 = v1164 ? v1132 : false;
      const v1167 = v1161 ? true : v1166;
      const v1168 = v1108.os;
      const v1169 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
      const v1170 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
      const v1171 = v1169 ? v1170 : false;
      const v1172 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
      const v1173 = v1171 ? v1172 : false;
      const v1174 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
      const v1175 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
      const v1176 = v1174 ? v1175 : false;
      const v1177 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
      const v1178 = v1176 ? v1177 : false;
      const v1179 = v1173 ? true : v1178;
      const v1180 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
      const v1181 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
      const v1182 = v1180 ? v1181 : false;
      const v1183 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
      const v1184 = v1182 ? v1183 : false;
      const v1185 = v1179 ? true : v1184;
      const v1188 = v1169 ? v1174 : false;
      const v1190 = v1188 ? v1180 : false;
      const v1191 = v1185 ? true : v1190;
      const v1194 = v1170 ? v1175 : false;
      const v1196 = v1194 ? v1181 : false;
      const v1197 = v1191 ? true : v1196;
      const v1200 = v1172 ? v1177 : false;
      const v1202 = v1200 ? v1183 : false;
      const v1203 = v1197 ? true : v1202;
      const v1206 = v1169 ? v1175 : false;
      const v1208 = v1206 ? v1183 : false;
      const v1209 = v1203 ? true : v1208;
      const v1212 = v1172 ? v1175 : false;
      const v1214 = v1212 ? v1180 : false;
      const v1215 = v1209 ? true : v1214;
      const v1216 = v1167 ? true : v1215;
      const v1222 = v1121 ? true : v1169;
      const v1227 = v1122 ? true : v1170;
      const v1232 = v1124 ? true : v1172;
      const v1237 = v1126 ? true : v1174;
      const v1242 = v1127 ? true : v1175;
      const v1247 = v1129 ? true : v1177;
      const v1252 = v1132 ? true : v1180;
      const v1257 = v1133 ? true : v1181;
      const v1262 = v1135 ? true : v1183;
      const v1265 = v1222 ? v1227 : false;
      const v1266 = v1265 ? v1232 : false;
      const v1267 = v1266 ? v1237 : false;
      const v1268 = v1267 ? v1242 : false;
      const v1269 = v1268 ? v1247 : false;
      const v1270 = v1269 ? v1252 : false;
      const v1271 = v1270 ? v1257 : false;
      const v1272 = v1271 ? v1262 : false;
      const v1273 = v1216 ? true : v1272;
      const v1274 = v1273 ? false : true;
      
      return v1274;})()) {
      const v1275 = v1108.xsTurn;
      if (v1275) {
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc0],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [v1291], secs: v1293, time: v1292, didSend: v495, from: v1290 } = txn3;
        ;
        const v1295 = stdlib.addressEq(v1085, v1290);
        stdlib.assert(v1295, {
          at: './index.rsh:260:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1296 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1291);
        const v1297 = stdlib.lt(v1291, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
        const v1298 = v1296 ? v1297 : false;
        stdlib.assert(v1298, {
          at: './index.rsh:198:10:application',
          fs: ['at ./index.rsh:262:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v1299 = v1108.xs;
        const v1301 = v1299[v1291];
        let v1302;
        if (v1301) {
          v1302 = true;
          }
        else {
          const v1303 = v1108.os;
          const v1305 = v1303[v1291];
          v1302 = v1305;
          }
        const v1306 = v1302 ? false : true;
        stdlib.assert(v1306, {
          at: './index.rsh:199:10:application',
          fs: ['at ./index.rsh:262:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v1308 = v1275 ? false : true;
        let v1309;
        if (v1275) {
          const v1312 = stdlib.Array_set(v1299, v1291, true);
          v1309 = v1312;
          }
        else {
          v1309 = v1299;
          }
        let v1314;
        if (v1275) {
          const v1315 = v1108.os;
          v1314 = v1315;
          }
        else {
          const v1316 = v1108.os;
          const v1318 = stdlib.Array_set(v1316, v1291, true);
          v1314 = v1318;
          }
        const v1320 = {
          os: v1314,
          xs: v1309,
          xsTurn: v1308
          };
        const cv1108 = v1320;
        const cv1109 = v1292;
        
        v1108 = cv1108;
        v1109 = cv1109;
        
        continue;
        
        }
      else {
        const v1323 = stdlib.protect(ctc0, await interact.getMove(v1108), {
          at: './index.rsh:191:30:application',
          fs: ['at ./index.rsh:268:35:application call to "getValidMove" (defined at: ./index.rsh:190:1:function exp)', 'at ./index.rsh:267:15:application call to [unknown function] (defined at: ./index.rsh:267:19:function exp)'],
          msg: 'getMove',
          who: 'Bob'
          });
        const v1324 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1323);
        const v1325 = stdlib.lt(v1323, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
        const v1326 = v1324 ? v1325 : false;
        stdlib.assert(v1326, {
          at: './index.rsh:192:9:application',
          fs: ['at ./index.rsh:268:35:application call to "getValidMove" (defined at: ./index.rsh:190:1:function exp)', 'at ./index.rsh:267:15:application call to [unknown function] (defined at: ./index.rsh:267:19:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v1327 = v1108.xs;
        const v1329 = v1327[v1323];
        let v1330;
        if (v1329) {
          v1330 = true;
          }
        else {
          const v1331 = v1108.os;
          const v1333 = v1331[v1323];
          v1330 = v1333;
          }
        const v1334 = v1330 ? false : true;
        stdlib.assert(v1334, {
          at: './index.rsh:193:9:application',
          fs: ['at ./index.rsh:268:35:application call to "getValidMove" (defined at: ./index.rsh:190:1:function exp)', 'at ./index.rsh:267:15:application call to [unknown function] (defined at: ./index.rsh:267:19:function exp)'],
          msg: null,
          who: 'Bob'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v1085, v1086, v1097, v1108, v1275, v1323],
          evt_cnt: 1,
          funcNum: 5,
          lct: v1109,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [v1336], secs: v1338, time: v1337, didSend: v553, from: v1335 } = txn3;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v1340 = stdlib.addressEq(v1097, v1335);
            stdlib.assert(v1340, {
              at: './index.rsh:270:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v1341 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1336);
            const v1342 = stdlib.lt(v1336, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
            const v1343 = v1341 ? v1342 : false;
            stdlib.assert(v1343, {
              at: './index.rsh:198:10:application',
              fs: ['at ./index.rsh:272:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v1346 = v1327[v1336];
            let v1347;
            if (v1346) {
              v1347 = true;
              }
            else {
              const v1348 = v1108.os;
              const v1350 = v1348[v1336];
              v1347 = v1350;
              }
            const v1351 = v1347 ? false : true;
            stdlib.assert(v1351, {
              at: './index.rsh:199:10:application',
              fs: ['at ./index.rsh:272:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v1353 = v1275 ? false : true;
            let v1354;
            if (v1275) {
              const v1357 = stdlib.Array_set(v1327, v1336, true);
              v1354 = v1357;
              }
            else {
              v1354 = v1327;
              }
            let v1359;
            if (v1275) {
              const v1360 = v1108.os;
              v1359 = v1360;
              }
            else {
              const v1361 = v1108.os;
              const v1363 = stdlib.Array_set(v1361, v1336, true);
              v1359 = v1363;
              }
            const v1365 = {
              os: v1359,
              xs: v1354,
              xsTurn: v1353
              };
            const cv1108 = v1365;
            const cv1109 = v1337;
            
            (() => {
              const v1108 = cv1108;
              const v1109 = cv1109;
              
              if ((() => {
                const v1120 = v1108.xs;
                const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1122 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1123 = v1121 ? v1122 : false;
                const v1124 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1125 = v1123 ? v1124 : false;
                const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1127 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1128 = v1126 ? v1127 : false;
                const v1129 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1130 = v1128 ? v1129 : false;
                const v1131 = v1125 ? true : v1130;
                const v1132 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1133 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1134 = v1132 ? v1133 : false;
                const v1135 = v1120[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1136 = v1134 ? v1135 : false;
                const v1137 = v1131 ? true : v1136;
                const v1140 = v1121 ? v1126 : false;
                const v1142 = v1140 ? v1132 : false;
                const v1143 = v1137 ? true : v1142;
                const v1146 = v1122 ? v1127 : false;
                const v1148 = v1146 ? v1133 : false;
                const v1149 = v1143 ? true : v1148;
                const v1152 = v1124 ? v1129 : false;
                const v1154 = v1152 ? v1135 : false;
                const v1155 = v1149 ? true : v1154;
                const v1158 = v1121 ? v1127 : false;
                const v1160 = v1158 ? v1135 : false;
                const v1161 = v1155 ? true : v1160;
                const v1164 = v1124 ? v1127 : false;
                const v1166 = v1164 ? v1132 : false;
                const v1167 = v1161 ? true : v1166;
                const v1168 = v1108.os;
                const v1169 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1170 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1171 = v1169 ? v1170 : false;
                const v1172 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1173 = v1171 ? v1172 : false;
                const v1174 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1175 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1176 = v1174 ? v1175 : false;
                const v1177 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1178 = v1176 ? v1177 : false;
                const v1179 = v1173 ? true : v1178;
                const v1180 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1181 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1182 = v1180 ? v1181 : false;
                const v1183 = v1168[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1184 = v1182 ? v1183 : false;
                const v1185 = v1179 ? true : v1184;
                const v1188 = v1169 ? v1174 : false;
                const v1190 = v1188 ? v1180 : false;
                const v1191 = v1185 ? true : v1190;
                const v1194 = v1170 ? v1175 : false;
                const v1196 = v1194 ? v1181 : false;
                const v1197 = v1191 ? true : v1196;
                const v1200 = v1172 ? v1177 : false;
                const v1202 = v1200 ? v1183 : false;
                const v1203 = v1197 ? true : v1202;
                const v1206 = v1169 ? v1175 : false;
                const v1208 = v1206 ? v1183 : false;
                const v1209 = v1203 ? true : v1208;
                const v1212 = v1172 ? v1175 : false;
                const v1214 = v1212 ? v1180 : false;
                const v1215 = v1209 ? true : v1214;
                const v1216 = v1167 ? true : v1215;
                const v1222 = v1121 ? true : v1169;
                const v1227 = v1122 ? true : v1170;
                const v1232 = v1124 ? true : v1172;
                const v1237 = v1126 ? true : v1174;
                const v1242 = v1127 ? true : v1175;
                const v1247 = v1129 ? true : v1177;
                const v1252 = v1132 ? true : v1180;
                const v1257 = v1133 ? true : v1181;
                const v1262 = v1135 ? true : v1183;
                const v1265 = v1222 ? v1227 : false;
                const v1266 = v1265 ? v1232 : false;
                const v1267 = v1266 ? v1237 : false;
                const v1268 = v1267 ? v1242 : false;
                const v1269 = v1268 ? v1247 : false;
                const v1270 = v1269 ? v1252 : false;
                const v1271 = v1270 ? v1257 : false;
                const v1272 = v1271 ? v1262 : false;
                const v1273 = v1216 ? true : v1272;
                const v1274 = v1273 ? false : true;
                
                return v1274;})()) {
                const v1275 = v1108.xsTurn;
                if (v1275) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                const v1366 = v1108.xs;
                const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1368 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1369 = v1367 ? v1368 : false;
                const v1370 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1371 = v1369 ? v1370 : false;
                const v1372 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1373 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1374 = v1372 ? v1373 : false;
                const v1375 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1376 = v1374 ? v1375 : false;
                const v1377 = v1371 ? true : v1376;
                const v1378 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1379 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1380 = v1378 ? v1379 : false;
                const v1381 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1382 = v1380 ? v1381 : false;
                const v1383 = v1377 ? true : v1382;
                const v1386 = v1367 ? v1372 : false;
                const v1388 = v1386 ? v1378 : false;
                const v1389 = v1383 ? true : v1388;
                const v1392 = v1368 ? v1373 : false;
                const v1394 = v1392 ? v1379 : false;
                const v1395 = v1389 ? true : v1394;
                const v1398 = v1370 ? v1375 : false;
                const v1400 = v1398 ? v1381 : false;
                const v1401 = v1395 ? true : v1400;
                const v1404 = v1367 ? v1373 : false;
                const v1406 = v1404 ? v1381 : false;
                const v1407 = v1401 ? true : v1406;
                const v1410 = v1370 ? v1373 : false;
                const v1412 = v1410 ? v1378 : false;
                const v1413 = v1407 ? true : v1412;
                const v1414 = v1108.os;
                const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
                const v1416 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
                const v1417 = v1415 ? v1416 : false;
                const v1418 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
                const v1419 = v1417 ? v1418 : false;
                const v1420 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
                const v1421 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
                const v1422 = v1420 ? v1421 : false;
                const v1423 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
                const v1424 = v1422 ? v1423 : false;
                const v1425 = v1419 ? true : v1424;
                const v1426 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
                const v1427 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
                const v1428 = v1426 ? v1427 : false;
                const v1429 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
                const v1430 = v1428 ? v1429 : false;
                const v1431 = v1425 ? true : v1430;
                const v1434 = v1415 ? v1420 : false;
                const v1436 = v1434 ? v1426 : false;
                const v1437 = v1431 ? true : v1436;
                const v1440 = v1416 ? v1421 : false;
                const v1442 = v1440 ? v1427 : false;
                const v1443 = v1437 ? true : v1442;
                const v1446 = v1418 ? v1423 : false;
                const v1448 = v1446 ? v1429 : false;
                const v1449 = v1443 ? true : v1448;
                const v1452 = v1415 ? v1421 : false;
                const v1454 = v1452 ? v1429 : false;
                const v1455 = v1449 ? true : v1454;
                const v1458 = v1418 ? v1421 : false;
                const v1460 = v1458 ? v1426 : false;
                const v1461 = v1455 ? true : v1460;
                const v1462 = [stdlib.checkedBigNumberify('./index.rsh:280:8:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:280:11:decimal', stdlib.UInt_max, 2)];
                const v1463 = [stdlib.checkedBigNumberify('./index.rsh:281:8:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:281:11:decimal', stdlib.UInt_max, 1)];
                const v1464 = v1461 ? v1462 : v1463;
                const v1465 = [stdlib.checkedBigNumberify('./index.rsh:278:8:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:278:11:decimal', stdlib.UInt_max, 0)];
                const v1466 = v1413 ? v1465 : v1464;
                const v1467 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 0)];
                const v1468 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 1)];
                const v1469 = stdlib.mul(v1467, v1086);
                sim_r.txns.push({
                  amt: v1469,
                  kind: 'from',
                  to: v1085,
                  tok: undefined
                  });
                const v1474 = stdlib.mul(v1468, v1086);
                sim_r.txns.push({
                  amt: v1474,
                  kind: 'from',
                  to: v1097,
                  tok: undefined
                  });
                const v1527 = v1413 ? stdlib.checkedBigNumberify('./index.rsh:285:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:45:decimal', stdlib.UInt_max, 0);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc2, ctc0, ctc2, ctc5, ctc3, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v1336], secs: v1338, time: v1337, didSend: v553, from: v1335 } = txn3;
        ;
        const v1340 = stdlib.addressEq(v1097, v1335);
        stdlib.assert(v1340, {
          at: './index.rsh:270:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1341 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:187:26:decimal', stdlib.UInt_max, 0), v1336);
        const v1342 = stdlib.lt(v1336, stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, 9));
        const v1343 = v1341 ? v1342 : false;
        stdlib.assert(v1343, {
          at: './index.rsh:198:10:application',
          fs: ['at ./index.rsh:272:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v1346 = v1327[v1336];
        let v1347;
        if (v1346) {
          v1347 = true;
          }
        else {
          const v1348 = v1108.os;
          const v1350 = v1348[v1336];
          v1347 = v1350;
          }
        const v1351 = v1347 ? false : true;
        stdlib.assert(v1351, {
          at: './index.rsh:199:10:application',
          fs: ['at ./index.rsh:272:24:application call to "applyMove" (defined at: ./index.rsh:197:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v1353 = v1275 ? false : true;
        let v1354;
        if (v1275) {
          const v1357 = stdlib.Array_set(v1327, v1336, true);
          v1354 = v1357;
          }
        else {
          v1354 = v1327;
          }
        let v1359;
        if (v1275) {
          const v1360 = v1108.os;
          v1359 = v1360;
          }
        else {
          const v1361 = v1108.os;
          const v1363 = stdlib.Array_set(v1361, v1336, true);
          v1359 = v1363;
          }
        const v1365 = {
          os: v1359,
          xs: v1354,
          xsTurn: v1353
          };
        const cv1108 = v1365;
        const cv1109 = v1337;
        
        v1108 = cv1108;
        v1109 = cv1109;
        
        continue;
        
        }}
    const v1366 = v1108.xs;
    const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
    const v1368 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
    const v1369 = v1367 ? v1368 : false;
    const v1370 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
    const v1371 = v1369 ? v1370 : false;
    const v1372 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
    const v1373 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
    const v1374 = v1372 ? v1373 : false;
    const v1375 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
    const v1376 = v1374 ? v1375 : false;
    const v1377 = v1371 ? true : v1376;
    const v1378 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
    const v1379 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
    const v1380 = v1378 ? v1379 : false;
    const v1381 = v1366[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
    const v1382 = v1380 ? v1381 : false;
    const v1383 = v1377 ? true : v1382;
    const v1386 = v1367 ? v1372 : false;
    const v1388 = v1386 ? v1378 : false;
    const v1389 = v1383 ? true : v1388;
    const v1392 = v1368 ? v1373 : false;
    const v1394 = v1392 ? v1379 : false;
    const v1395 = v1389 ? true : v1394;
    const v1398 = v1370 ? v1375 : false;
    const v1400 = v1398 ? v1381 : false;
    const v1401 = v1395 ? true : v1400;
    const v1404 = v1367 ? v1373 : false;
    const v1406 = v1404 ? v1381 : false;
    const v1407 = v1401 ? true : v1406;
    const v1410 = v1370 ? v1373 : false;
    const v1412 = v1410 ? v1378 : false;
    const v1413 = v1407 ? true : v1412;
    const v1414 = v1108.os;
    const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 0)];
    const v1416 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 1)];
    const v1417 = v1415 ? v1416 : false;
    const v1418 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 2)];
    const v1419 = v1417 ? v1418 : false;
    const v1420 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 3)];
    const v1421 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 4)];
    const v1422 = v1420 ? v1421 : false;
    const v1423 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 5)];
    const v1424 = v1422 ? v1423 : false;
    const v1425 = v1419 ? true : v1424;
    const v1426 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:4:array ref', stdlib.UInt_max, 6)];
    const v1427 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:21:array ref', stdlib.UInt_max, 7)];
    const v1428 = v1426 ? v1427 : false;
    const v1429 = v1414[stdlib.checkedBigNumberify('./index.rsh:167:47:array ref', stdlib.UInt_max, 8)];
    const v1430 = v1428 ? v1429 : false;
    const v1431 = v1425 ? true : v1430;
    const v1434 = v1415 ? v1420 : false;
    const v1436 = v1434 ? v1426 : false;
    const v1437 = v1431 ? true : v1436;
    const v1440 = v1416 ? v1421 : false;
    const v1442 = v1440 ? v1427 : false;
    const v1443 = v1437 ? true : v1442;
    const v1446 = v1418 ? v1423 : false;
    const v1448 = v1446 ? v1429 : false;
    const v1449 = v1443 ? true : v1448;
    const v1452 = v1415 ? v1421 : false;
    const v1454 = v1452 ? v1429 : false;
    const v1455 = v1449 ? true : v1454;
    const v1458 = v1418 ? v1421 : false;
    const v1460 = v1458 ? v1426 : false;
    const v1461 = v1455 ? true : v1460;
    const v1462 = [stdlib.checkedBigNumberify('./index.rsh:280:8:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:280:11:decimal', stdlib.UInt_max, 2)];
    const v1463 = [stdlib.checkedBigNumberify('./index.rsh:281:8:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:281:11:decimal', stdlib.UInt_max, 1)];
    const v1464 = v1461 ? v1462 : v1463;
    const v1465 = [stdlib.checkedBigNumberify('./index.rsh:278:8:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:278:11:decimal', stdlib.UInt_max, 0)];
    const v1466 = v1413 ? v1465 : v1464;
    const v1467 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 0)];
    const v1468 = v1466[stdlib.checkedBigNumberify('./index.rsh:277:9:array', stdlib.UInt_max, 1)];
    const v1469 = stdlib.mul(v1467, v1086);
    ;
    const v1474 = stdlib.mul(v1468, v1086);
    ;
    const v1527 = v1413 ? stdlib.checkedBigNumberify('./index.rsh:285:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:45:decimal', stdlib.UInt_max, 0);
    stdlib.protect(ctc1, await interact.seeOutcome(v1527), {
      at: './index.rsh:287:24:application',
      fs: ['at ./index.rsh:286:7:application call to [unknown function] (defined at: ./index.rsh:286:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 48
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:243:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:243:9:dot"
// "[]"
load 254
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
global Round
load 253
+
store 252
txn Sender
load 254
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
<
assert
// "CheckPay"
// "./index.rsh:249:7:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 255
load 254
itob
concat
txn Sender
concat
int 18
bzero
int 1
itob // bool
substring 7 8
concat
global Round
itob
concat
b loopBody3
l3_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:249:49:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:249:49:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l6_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l7_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5_afterHandler2:
l8_afterHandler3:
// Handler 4
dup
int 4
==
bz l9_afterHandler4
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 19
store 252
dup
extract 91 1
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 250
pop
// "CheckPay"
// "./index.rsh:260:13:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:260:13:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "./index.rsh:198:10:application"
// "[at ./index.rsh:262:24:application call to \"applyMove\" (defined at: ./index.rsh:197:1:function exp)]"
int 0
load 250
<=
load 250
int 9
<
&&
assert
load 252
extract 9 9
dup
store 249
load 250
getbyte
bz l10_localIfF
int 1
store 248
b l11_localIfK
l10_localIfF:
load 252
extract 0 9
load 250
getbyte
store 248
l11_localIfK:
// Nothing
// "./index.rsh:199:10:application"
// "[at ./index.rsh:262:24:application call to \"applyMove\" (defined at: ./index.rsh:197:1:function exp)]"
load 248
!
assert
load 251
bz l12_localIfF
load 249
load 250
int 1
setbyte
store 247
b l13_localIfK
l12_localIfF:
load 249
store 247
l13_localIfK:
load 251
bz l14_localIfF
load 252
extract 0 9
store 246
b l15_localIfK
l14_localIfF:
load 252
extract 0 9
load 250
int 1
setbyte
store 246
l15_localIfK:
load 255
load 254
itob
concat
load 253
concat
load 246
load 247
concat
load 251
!
itob // bool
substring 7 8
concat
global Round
itob
concat
b loopBody3
l9_afterHandler4:
// Handler 5
dup
int 5
==
bz l16_afterHandler5
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 19
store 252
dup
extract 91 1
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 250
pop
// "CheckPay"
// "./index.rsh:270:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:270:11:dot"
// "[]"
load 253
txn Sender
==
assert
// Nothing
// "./index.rsh:198:10:application"
// "[at ./index.rsh:272:24:application call to \"applyMove\" (defined at: ./index.rsh:197:1:function exp)]"
int 0
load 250
<=
load 250
int 9
<
&&
assert
load 252
extract 9 9
dup
store 249
load 250
getbyte
bz l17_localIfF
int 1
store 248
b l18_localIfK
l17_localIfF:
load 252
extract 0 9
load 250
getbyte
store 248
l18_localIfK:
// Nothing
// "./index.rsh:199:10:application"
// "[at ./index.rsh:272:24:application call to \"applyMove\" (defined at: ./index.rsh:197:1:function exp)]"
load 248
!
assert
load 251
bz l19_localIfF
load 249
load 250
int 1
setbyte
store 247
b l20_localIfK
l19_localIfF:
load 249
store 247
l20_localIfK:
load 251
bz l21_localIfF
load 252
extract 0 9
store 246
b l22_localIfK
l21_localIfF:
load 252
extract 0 9
load 250
int 1
setbyte
store 246
l22_localIfK:
load 255
load 254
itob
concat
load 253
concat
load 246
load 247
concat
load 251
!
itob // bool
substring 7 8
concat
global Round
itob
concat
b loopBody3
l16_afterHandler5:
int 0
assert
loopBody3:
dup
extract 0 19
store 255
dup
int 19
extract_uint64
store 254
pop
dup
extract 0 32
store 253
dup
int 32
extract_uint64
store 252
dup
extract 40 32
store 251
pop
load 255
extract 9 9
dup
store 250
int 0
getbyte
store 249
load 250
int 1
getbyte
store 248
load 250
int 2
getbyte
store 247
load 250
int 3
getbyte
store 246
load 250
int 4
getbyte
store 245
load 250
int 5
getbyte
store 244
load 250
int 6
getbyte
store 243
load 250
int 7
getbyte
store 242
load 250
int 8
getbyte
store 241
load 249
load 248
&&
load 247
&&
load 246
load 245
&&
load 244
&&
||
load 243
load 242
&&
load 241
&&
||
load 249
load 246
&&
load 243
&&
||
load 248
load 245
&&
load 242
&&
||
load 247
load 244
&&
load 241
&&
||
load 249
load 245
&&
load 241
&&
||
load 247
load 245
&&
load 243
&&
||
store 240
load 255
extract 0 9
dup
store 239
int 0
getbyte
store 238
load 239
int 1
getbyte
store 237
load 239
int 2
getbyte
store 236
load 239
int 3
getbyte
store 235
load 239
int 4
getbyte
store 234
load 239
int 5
getbyte
store 233
load 239
int 6
getbyte
store 232
load 239
int 7
getbyte
store 231
load 239
int 8
getbyte
store 230
load 238
load 237
&&
load 236
&&
load 235
load 234
&&
load 233
&&
||
load 232
load 231
&&
load 230
&&
||
load 238
load 235
&&
load 232
&&
||
load 237
load 234
&&
load 231
&&
||
load 236
load 233
&&
load 230
&&
||
load 238
load 234
&&
load 230
&&
||
load 236
load 234
&&
load 232
&&
||
store 229
load 240
load 229
||
load 249
load 238
||
load 248
load 237
||
&&
load 247
load 236
||
&&
load 246
load 235
||
&&
load 245
load 234
||
&&
load 244
load 233
||
&&
load 243
load 232
||
&&
load 242
load 231
||
&&
load 241
load 230
||
&&
||
bz l23_ifF
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 229
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 240
select
dup
store 228
int 0
extract_uint64
load 252
*
dup
bz l24_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l24_checkTxnK:
pop
load 228
int 8
extract_uint64
load 252
*
dup
bz l25_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 251
dig 1
gtxns Receiver
==
assert
l25_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l26_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l23_ifF:
load 255
extract 18 1
btoi
dup
store 228
bz l27_ifF
load 253
load 252
itob
concat
load 251
concat
load 255
concat
load 228
itob // bool
substring 7 8
concat
int 1
bzero
dig 1
extract 0 92
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l27_ifF:
load 253
load 252
itob
concat
load 251
concat
load 255
concat
load 228
itob // bool
substring 7 8
concat
int 1
bzero
dig 1
extract 0 92
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 92,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1086",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1087",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1086",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1087",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1291",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1336",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1291",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1336",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c9138038062001c91833981016040819052620000269162000238565b6000808055604080516020810190915290815260408051835181526020808501518051828401520151918101919091527ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299060600160405180910390a160208201515162000098903414600762000131565b6020808301510151620000ac904362000298565b815260408051606080820183526000602080840182815284860183815233808752898401515183528851825260019485905543909455865192830193909352519481019490945251908301529060800160405160208183030381529060405260029080519060200190620001229291906200015b565b50504360035550620002fc9050565b81620001575760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016990620002bf565b90600052602060002090601f0160209004810192826200018d5760008555620001d8565b82601f10620001a857805160ff1916838001178555620001d8565b82800160010185558215620001d8579182015b82811115620001d8578251825591602001919060010190620001bb565b50620001e6929150620001ea565b5090565b5b80821115620001e65760008155600101620001eb565b604080519081016001600160401b03811182821017156200023257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024c57600080fd5b6200025662000201565b835181526040601f19830112156200026d57600080fd5b6200027762000201565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ba57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002d457607f821691505b60208210811415620002f657634e487b7160e01b600052602260045260246000fd5b50919050565b611985806200030c6000396000f3fe60806040526004361061006e5760003560e01c8063ab53f2c61161004b578063ab53f2c6146100c3578063cee12280146100e6578063f2c9f696146100f9578063fd948b861461010c57005b80631e93b0f1146100775780637963168e1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004611570565b61011f565b3480156100ba57600080fd5b50600154610088565b3480156100cf57600080fd5b506100d8610353565b604051610092929190611593565b6100756100f4366004611570565b6103f0565b610075610107366004611570565b6106ad565b61007561011a366004611570565b61086e565b61012f6001600054146009610a02565b6101498135158061014257506001548235145b600a610a02565b60008080556002805461015b906115f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610187906115f0565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec91906116a3565b90506101f66112be565b61020782604001514310600b610a02565b7f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d8360405161023691906116f4565b60405180910390a161024f826020015134146008610a02565b805160009081905281516020908101829052825160409081018390528351606090810184905284516080908101859052855160a0908101869052865160c0908101879052875160e09081018890528851610100908101899052878a0180518a9052805189018a9052805188018a905280519096018990528551909401889052845190920187905283510186905282510185905281510193909352835181850180519190915292518351909201919091529051600191015261030e6112f0565b825181516001600160a01b0390911690526020808401518251820152815133604091820152830151818301805191909152514391015261034d81610a27565b50505050565b600060606000546002808054610368906115f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610394906115f0565b80156103e15780601f106103b6576101008083540402835291602001916103e1565b820191906000526020600020905b8154815290600101906020018083116103c457829003601f168201915b50505050509050915091509091565b6104006005600054146015610a02565b61041a8135158061041357506001548235145b6016610a02565b60008080556002805461042c906115f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610458906115f0565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b50505050508060200190518101906104bd91906117b1565b90506104c7611320565b6040805184358152602080860135908201527fb5f68330967194c85eebaf8de848d0571722cf52211ff80fb1ea5c866248c2aa910160405180910390a161051034156011610a02565b8151610528906001600160a01b031633146012610a02565b61053a60096020850135106013610a02565b81606001516020015183602001600001356009811061055b5761055b611719565b60200201511561056e5760018152610593565b60608201515160208401356009811061058957610589611719565b6020020151151581525b80516105ae906105a45760016105a7565b60005b6014610a02565b8160800151156105dd576105d382606001516020015184602001600001356001611240565b60208201526105ed565b6060820151602090810151908201525b816080015115610607576060820151516040820152610623565b60608201515161061d9060208501356001611240565b60408201525b60408101516060820180519190915260208083015191510152608082015161064c57600161064f565b60005b60608201519015156040909101526106656112f0565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169201919091526060830151818301805191909152514391015261034d81610a27565b6106bd600660005414601b610a02565b6106d7813515806106d057506001548235145b601c610a02565b6000808055600280546106e9906115f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610715906115f0565b80156107625780601f1061073757610100808354040283529160200191610762565b820191906000526020600020905b81548152906001019060200180831161074557829003601f168201915b505050505080602001905181019061077a91906117b1565b9050610784611320565b6040805184358152602080860135908201527f3c04125933303f599cc5d20b6f660c4c9857a80c5f4570c2236678d0bd3959e3910160405180910390a16107cd34156017610a02565b60408201516107e8906001600160a01b031633146018610a02565b6107fa60096020850135106019610a02565b81606001516020015183602001600001356009811061081b5761081b611719565b60200201511561082e5760018152610853565b60608201515160208401356009811061084957610849611719565b6020020151151581525b80516105ae90610864576001610867565b60005b601a610a02565b61087e600160005414600e610a02565b6108988135158061089157506001548235145b600f610a02565b6000808055600280546108aa906115f0565b80601f01602080910402602001604051908101604052809291908181526020018280546108d6906115f0565b80156109235780601f106108f857610100808354040283529160200191610923565b820191906000526020600020905b81548152906001019060200180831161090657829003601f168201915b505050505080602001905181019061093b91906116a3565b905061094f81604001514310156010610a02565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d158260405161097e91906116f4565b60405180910390a16109923415600c610a02565b80516109aa906001600160a01b03163314600d610a02565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109e7573d6000803e3d6000fd5b50600080805560018190556109fe9060029061133c565b5050565b816109fe5760405163100960cb60e01b81526004810182905260240160405180910390fd5b610a2f611379565b60208281015151015151610a44576000610a51565b6020828101515181015101515b610a5c576000610a6a565b602082810151510151604001515b610ab15760208281015151015160600151610a86576000610a94565b602082810151510151608001515b610a9f576000610ab4565b60208281015151015160a00151610ab4565b60015b610afc5760208281015151015160c00151610ad0576000610ade565b60208281015151015160e001515b610ae9576000610aff565b6020828101515101516101000151610aff565b60015b610b435760208281015151015151610b18576000610b26565b602082810151510151606001515b610b31576000610b46565b60208281015151015160c00151610b46565b60015b610b8c57602082810151518101510151610b61576000610b6f565b602082810151510151608001515b610b7a576000610b8f565b60208281015151015160e00151610b8f565b60015b610bd75760208281015151015160400151610bab576000610bb9565b60208281015151015160a001515b610bc4576000610bda565b6020828101515101516101000151610bda565b60015b610c1f5760208281015151015151610bf3576000610c01565b602082810151510151608001515b610c0c576000610c22565b6020828101515101516101000151610c22565b60015b610c695760208281015151015160400151610c3e576000610c4c565b602082810151510151608001515b610c57576000610c6c565b60208281015151015160c00151610c6c565b60015b151581526020820151515151610c83576000610c8e565b602082810151515101515b610c99576000610ca5565b60208201515151604001515b610ce6576020820151515160600151610cbf576000610ccb565b60208201515151608001515b610cd6576000610ce9565b6020820151515160a00151610ce9565b60015b610d2b576020820151515160c00151610d03576000610d0f565b6020820151515160e001515b610d1a576000610d2e565b602082015151516101000151610d2e565b60015b610d6c576020820151515151610d45576000610d51565b60208201515151606001515b610d5c576000610d6f565b6020820151515160c00151610d6f565b60015b610daf5760208281015151510151610d88576000610d94565b60208201515151608001515b610d9f576000610db2565b6020820151515160e00151610db2565b60015b610df4576020820151515160400151610dcc576000610dd8565b6020820151515160a001515b610de3576000610df7565b602082015151516101000151610df7565b60015b610e36576020820151515151610e0e576000610e1a565b60208201515151608001515b610e25576000610e39565b602082015151516101000151610e39565b60015b610e7a576020820151515160400151610e53576000610e5f565b60208201515151608001515b610e6a576000610e7d565b6020820151515160c00151610e7d565b60015b151560208201528051610e94578060200151610e97565b60015b6110355760208281015151015151610eb6576020820151515151610eb9565b60015b610ec4576000610ee6565b602082810151518101510151610ee35760208281015151510151610ee6565b60015b610ef1576000610f15565b60208281015151015160400151610f12576020820151515160400151610f15565b60015b610f20576000610f44565b60208281015151015160600151610f41576020820151515160600151610f44565b60015b610f4f576000610f73565b60208281015151015160800151610f70576020820151515160800151610f73565b60015b610f7e576000610fa2565b60208281015151015160a00151610f9f576020820151515160a00151610fa2565b60015b610fad576000610fd1565b60208281015151015160c00151610fce576020820151515160c00151610fd1565b60015b610fdc576000611000565b60208281015151015160e00151610ffd576020820151515160e00151611000565b60015b61100b576000611038565b602082810151510151610100015161102e57602082015151516101000151611038565b6001611038565b60015b1561114b57604081018051600090819052905160026020918201819052606084018051600190819052905183015260808401805191909152510152805161109657806020015161108c57806060015161109c565b806040015161109c565b80608001515b60a082018190528251805160209091015191516001600160a01b03909116916108fc916110c9919061187d565b6040518115909202916000818181858888f193505050501580156110f1573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360a0015160200151611123919061187d565b6040518115909202916000818181858888f193505050501580156109e7573d6000803e3d6000fd5b60208201515160400151156111df57611162611419565b8251516001600160a01b039081168252835160209081015181840152845160409081015190921682840152808501805151606085015251518201511515608084015260056000554360015590516111bb918391016118c1565b6040516020818303038152906040526002908051906020019061034d929190611460565b6111e7611419565b8251516001600160a01b039081168252835160209081015181840152845160409081015190921682840152808501805151606085015251518201511515608084015260066000554360015590516111bb918391016118c1565b6112486114e4565b60005b60098110156112995784816009811061126657611266611719565b602002015182826009811061127d5761127d611719565b911515602090920201528061129181611934565b91505061124b565b50818184600981106112ad576112ad611719565b911515602090920201529392505050565b60405180606001604052806112d16114e4565b81526020016112de6114e4565b81526020016112eb611503565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016112eb611523565b60405180608001604052806000151581526020016112d16114e4565b508054611348906115f0565b6000825580601f10611358575050565b601f0160209004906000526020600020908101906113769190611543565b50565b6040518060c001604052806000151581526020016000151581526020016113b3604051806040016040528060008152602001600081525090565b81526020016113d5604051806040016040528060008152602001600081525090565b81526020016113f7604051806040016040528060008152602001600081525090565b81526020016112eb604051806040016040528060008152602001600081525090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611453611503565b8152600060209091015290565b82805461146c906115f0565b90600052602060002090601f01602090048101928261148e57600085556114d4565b82601f106114a757805160ff19168380011785556114d4565b828001600101855582156114d4579182015b828111156114d45782518255916020019190600101906114b9565b506114e0929150611543565b5090565b6040518061012001604052806009906020820280368337509192915050565b60405180606001604052806115166114e4565b81526020016114536114e4565b6040518060400160405280611536611503565b8152602001600081525090565b5b808211156114e05760008155600101611544565b60006040828403121561156a57600080fd5b50919050565b60006040828403121561158257600080fd5b61158c8383611558565b9392505050565b82815260006020604081840152835180604085015260005b818110156115c7578581018301518582016060015282016115ab565b818111156115d9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061160457607f821691505b6020821081141561156a57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561165e5761165e611625565b60405290565b60405160a0810167ffffffffffffffff8111828210171561165e5761165e611625565b80516001600160a01b038116811461169e57600080fd5b919050565b6000606082840312156116b557600080fd5b6116bd61163b565b6116c683611687565b815260208301516020820152604083015160408201528091505092915050565b801515811461137657600080fd5b8135815260408101602083013561170a816116e6565b80151560208401525092915050565b634e487b7160e01b600052603260045260246000fd5b805161169e816116e6565b600082601f83011261174b57600080fd5b60405161012080820182811067ffffffffffffffff8211171561177057611770611625565b6040528301818582111561178357600080fd5b845b828110156117a6578051611798816116e6565b825260209182019101611785565b509195945050505050565b60008183036102e08112156117c557600080fd5b6117cd611664565b6117d684611687565b8152602084015160208201526117ee60408501611687565b6040820152610260605f198301121561180657600080fd5b61180e61163b565b915061181d856060860161173a565b825261182d85610180860161173a565b60208301526102a0840151611841816116e6565b60408301526060810182905261185a6102c0850161172f565b6080820152949350505050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561189757611897611867565b500290565b8060005b600981101561034d57815115158452602093840193909101906001016118a0565b60006102e08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015161190160608401825161189c565b602081015161191461018085018261189c565b506040015115156102a08301526080929092015115156102c09091015290565b600060001982141561194857611948611867565b506001019056fea26469706673582212205e3cf09e751208f0017e4f61dad5be015b84728c40ced9d1591ca8ce09a254af64736f6c63430008090033`,
  BytecodeLen: 7313,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
