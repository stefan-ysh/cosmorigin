export interface GlowFilamentColor {
  code: string;
  name: string;
  image: string;
}

export interface SingleThermochromicColor {
  code: string;
  name: string;
  cold: string;
}

export interface DualThermochromicColor {
  code: string;
  name: string;
  cold: string;
  hot: string;
}

export interface DualThermochromicFamily {
  id: string;
  name: string;
  colors: DualThermochromicColor[];
}

// Glow PLA 夜光系列 · 6 款基础颜色（吸收自然光/紫外光/LED 光后暗处持续余辉）
export const glowFilamentColors: GlowFilamentColor[] = [
  { code: 'Glow PLA', name: '夜光绿', image: '/images/filament/glow-pla-green.png' },
  { code: 'Glow PLA', name: '夜光蓝', image: '/images/filament/glow-pla-blue.png' },
  { code: 'Glow PLA', name: '夜光黄', image: '/images/filament/glow-pla-yellow.png' },
  { code: 'Glow PLA', name: '夜光橙', image: '/images/filament/glow-pla-orange.png' },
  { code: 'Glow PLA', name: '夜光红', image: '/images/filament/glow-pla-red.png' },
  { code: 'Glow PLA', name: '夜光白', image: '/images/filament/glow-pla-white.png' },
];

// TC 单色温变系列（22℃ / 30℃ / 42℃）· 冷态显示目标颜色，受热后趋近 PLA 基材本色
export const singleThermochromicColors: SingleThermochromicColor[] = [
  { code: 'TC-S01', name: '柠檬黄', cold: '#FCE404' },
  { code: 'TC-S02', name: '桔黄', cold: '#F4A41C' },
  { code: 'TC-S03', name: '橘红', cold: '#FC6404' },
  { code: 'TC-S04', name: '大红', cold: '#AC2424' },
  { code: 'TC-S05', name: '紫罗兰', cold: '#3C249C' },
  { code: 'TC-S06', name: '宝蓝', cold: '#4C14E4' },
  { code: 'TC-S07', name: '玫红', cold: '#AC246C' },
  { code: 'TC-S08', name: '深蓝', cold: '#141C8C' },
  { code: 'TC-S09', name: '花青', cold: '#2C2C64' },
  { code: 'TC-S10', name: '草绿', cold: '#14843C' },
  { code: 'TC-S11', name: '翠绿', cold: '#1C946C' },
  { code: 'TC-S12', name: '孔雀绿', cold: '#047C84' },
  { code: 'TC-S13', name: '墨绿', cold: '#043404' },
  { code: 'TC-S14', name: '咖啡棕', cold: '#441414' },
  { code: 'TC-S15', name: '曜石黑', cold: '#0C0C0C' },
  { code: 'TC-S16', name: '深灰', cold: '#1C1C1C' },
];

// TC 双色温变系列（22℃ / 30℃ / 42℃）· 冷态 → 热态参考色
export const dualThermochromicFamilies: DualThermochromicFamily[] = [
  {
    id: 'O',
    name: '黄橙系',
    colors: [
      { code: 'TC-O01', name: '橙变柠檬黄', cold: '#CC5404', hot: '#FCF404' },
      { code: 'TC-O02', name: '大红变柠檬黄', cold: '#CC2C1C', hot: '#FCF404' },
      { code: 'TC-O03', name: '橘红变浅黄', cold: '#C43C34', hot: '#FCF47C' },
      { code: 'TC-O04', name: '翠蓝变浅黄', cold: '#144C44', hot: '#FCF47C' },
      { code: 'TC-O05', name: '翠青变桔黄', cold: '#14643C', hot: '#BC9C3C' },
      { code: 'TC-O06', name: '青绿变黄', cold: '#2C843C', hot: '#CCDC54' },
      { code: 'TC-O07', name: '灰色变橘黄', cold: '#3C3C2C', hot: '#DCAC7C' },
      { code: 'TC-O08', name: '赭红变淡黄', cold: '#340C0C', hot: '#ECDC5C' },
      { code: 'TC-O09', name: '灰红变桔黄', cold: '#942C34', hot: '#FCB454' },
      { code: 'TC-O10', name: '大红变橙', cold: '#CC0404', hot: '#FC7C1C' },
      { code: 'TC-O11', name: '黄灰变桔黄', cold: '#6C3C1C', hot: '#FC8434' },
      { code: 'TC-O12', name: '紫红变桔红', cold: '#6C2434', hot: '#EC5C3C' },
      { code: 'TC-O13', name: '橄榄绿变桔红', cold: '#44442C', hot: '#FC7C1C' },
      { code: 'TC-O14', name: '草灰变浅黄', cold: '#547454', hot: '#FCDCC4' },
    ],
  },
  {
    id: 'R',
    name: '红系',
    colors: [
      { code: 'TC-R01', name: '大红变浅粉', cold: '#B41C24', hot: '#F4C4D4' },
      { code: 'TC-R02', name: '玫红变杏白', cold: '#9C0444', hot: '#FCB4A4' },
      { code: 'TC-R03', name: '深紫变杏白', cold: '#3C1444', hot: '#F4C4DC' },
      { code: 'TC-R04', name: '青色变粉红', cold: '#1C2C64', hot: '#F4BCBC' },
      { code: 'TC-R05', name: '紫蓝变桃红', cold: '#340C74', hot: '#EC8CB4' },
      { code: 'TC-R06', name: '蓝绿变粉红', cold: '#0C4C64', hot: '#F49C94' },
      { code: 'TC-R07', name: '紫变桃红', cold: '#6C245C', hot: '#EC545C' },
      { code: 'TC-R08', name: '褐色变大红', cold: '#3C1404', hot: '#BC2C1C' },
      { code: 'TC-R09', name: '红变桃红', cold: '#E41C14', hot: '#FC4CAC' },
      { code: 'TC-R10', name: '深紫变粉红', cold: '#3C1C84', hot: '#F494D4' },
      { code: 'TC-R11', name: '翠绿变粉红', cold: '#0C3424', hot: '#FCA4CC' },
      { code: 'TC-R12', name: '褐色变深粉红', cold: '#4C1C14', hot: '#E43C8C' },
    ],
  },
  {
    id: 'P',
    name: '紫系',
    colors: [
      { code: 'TC-P01', name: '酒红变浅紫', cold: '#9C040C', hot: '#EC84EC' },
      { code: 'TC-P02', name: '紫蓝变紫红', cold: '#3C2C8C', hot: '#A434B4' },
      { code: 'TC-P03', name: '黑变粉红紫', cold: '#240C0C', hot: '#D4A4CC' },
      { code: 'TC-P04', name: '青蓝变淡紫', cold: '#1C1C94', hot: '#C4B4E4' },
      { code: 'TC-P05', name: '紫红变粉', cold: '#4C145C', hot: '#FC5CAC' },
    ],
  },
  {
    id: 'B',
    name: '蓝系',
    colors: [
      { code: 'TC-B01', name: '黄褐变浅蓝', cold: '#7C440C', hot: '#5CD4FC' },
      { code: 'TC-B02', name: '酒红变天蓝', cold: '#5C0C3C', hot: '#549CFC' },
      { code: 'TC-B03', name: '红紫变蓝', cold: '#7C1C7C', hot: '#6CC4FC' },
      { code: 'TC-B04', name: '熏衣紫变天蓝', cold: '#441C8C', hot: '#049CEC' },
      { code: 'TC-B05', name: '深蓝变天蓝', cold: '#0C1C3C', hot: '#5CA4E4' },
      { code: 'TC-B06', name: '翠绿变湖蓝', cold: '#144C24', hot: '#2CACC4' },
      { code: 'TC-B07', name: '深蓝变翠绿', cold: '#1C346C', hot: '#54C4AC' },
      { code: 'TC-B08', name: '深紫变天蓝', cold: '#4C1444', hot: '#A4D4EC' },
      { code: 'TC-B09', name: '蓝灰变浅蓝', cold: '#6C747C', hot: '#B4CCE4' },
    ],
  },
  {
    id: 'G',
    name: '青绿系',
    colors: [
      { code: 'TC-G01', name: '橙红变粉青', cold: '#D4341C', hot: '#DCECCC' },
      { code: 'TC-G02', name: '桃红变青粉', cold: '#BC2C5C', hot: '#ECF4BC' },
      { code: 'TC-G03', name: '紫变青', cold: '#6C2454', hot: '#B4DC94' },
      { code: 'TC-G04', name: '湖蓝变粉青', cold: '#043C64', hot: '#ACDCAC' },
      { code: 'TC-G05', name: '藏青变青绿', cold: '#143C54', hot: '#ACEC64' },
      { code: 'TC-G06', name: '咖啡棕变青绿', cold: '#2C1C14', hot: '#ACEC64' },
      { code: 'TC-G07', name: '朱褐变荧光绿', cold: '#74341C', hot: '#A4FC2C' },
      { code: 'TC-G08', name: '朱红变纯青', cold: '#9C2404', hot: '#C4FC54' },
      { code: 'TC-G09', name: '翡翠蓝变荧光青', cold: '#0C443C', hot: '#B4FC34' },
    ],
  },
];

// 电子色卡下载链接（public 目录）
export const filamentColorCardPdf = '/宇元新材-夜光温变系列色卡.pdf';
