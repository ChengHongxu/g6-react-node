import React from 'react';
import G6 from '@antv/g6';
import { Rect, Text, Circle, Image, Group, createNodeFromReact } from '../'; // '@antv/g6-react-node';

const Tag = ({ text, color }: { text: string; color: string }) => (
  <Rect
    style={{
      fill: color,
      padding: [5, 10],
      width: 'auto',
      radius: [4],
      margin: [0, 8],
    }}
  >
    <Text style={{ fill: '#fff', fontSize: 10 }}>{text}</Text>
  </Rect>
);

const Card = ({ cfg }: { cfg: any }) => {
  const { collapsed = false } = cfg;

  return (
    <Group draggable>
      <Rect
        style={{
          width: 400,
          height: 'auto',
          fill: '#fff',
          stroke: '#ddd',
          shadowColor: '#eee',
          shadowBlur: 30,
          radius: [8],
          justifyContent: 'center',
          padding: [18, 0],
        }}
        draggable
      >
        <Text
          style={{
            fill: '#000',
            margin: [0, 24],
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          这是一个卡片
        </Text>
        <Text style={{ fill: '#ccc', fontSize: 12, margin: [12, 24] }}>
          我是一段特别特别特别特别特别特别特别长的描述
        </Text>
        {collapsed && (
          <Group>
            <Image
              style={{
                img:
                  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                width: 200,
                height: 200,
                margin: [24, 'auto'],
              }}
            />
            <Rect
              style={{ width: 'auto', flexDirection: 'row', padding: [4, 12] }}
            >
              <Tag color="#66ccff" text="我是" />
              <Tag color="#66ccff" text="很多个" />
              <Tag color="#66ccff" text="很多个的" />
              <Tag color="#66ccff" text="标签" />
            </Rect>
          </Group>
        )}
        <Circle
          style={{
            x: 380,
            y: 20,
            r: 5,
            fill: collapsed ? 'blue' : 'green',
          }}
        >
          <Text
            style={{
              fill: '#fff',
              fontSize: 10,
              margin: [-6, -3, 0],
              cursor: 'pointer',
            }}
            onClick={(evt, node, shape, graph) => {
              if (node) {
                graph.updateItem(node, {
                  collapsed: !collapsed,
                });
              }
            }}
          >
            {collapsed ? '-' : '+'}
          </Text>
        </Circle>
      </Rect>
    </Group>
  );
};

G6.registerNode('test', {
  ...createNodeFromReact(Card),
  getAnchorPoints() {
    return [[0, 0.5]];
  },
});
