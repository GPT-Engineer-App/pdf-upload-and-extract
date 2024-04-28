import { Box, Button, Flex, Heading, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaFileUpload, FaCog, FaEye, FaFileExport, FaDatabase } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        {/* PDF文件上传界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">PDF文件上传界面</Heading>
          <Text mt={4}>功能：允许用户上传PDF文件进行结构化提取。支持批量上传多个PDF文件。</Text>
          <Flex align="center" mt={4}>
            <Input placeholder="选择PDF文件" type="file" mr={2} />
            <Button leftIcon={<FaFileUpload />}>上传</Button>
          </Flex>
        </Box>

        {/* 结构化提取设置界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">结构化提取设置界面</Heading>
          <Text mt={4}>功能：提供用户选择结构化提取的内容类型，如章节、语段、句子等。</Text>
          <Textarea placeholder="定义提取规则和条件，如关键词匹配、样式识别等" mt={4} />
          <Button leftIcon={<FaCog />} mt={4}>
            设置提取规则
          </Button>
        </Box>

        {/* 文本结构化提取界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">文本结构化提取界面</Heading>
          <Text mt={4}>功能：展示PDF文件的结构化提取结果。</Text>
          <Text mt={4}>示例提取结果：章节1，语段1，句子1...</Text>
        </Box>

        {/* 提取结果预览界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">提取结果预览界面</Heading>
          <Text mt={4}>功能：提供用户预览结构化提取的结果。</Text>
          <Button leftIcon={<FaEye />} mt={4}>
            预览结果
          </Button>
        </Box>

        {/* 导出数据界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">导出数据界面</Heading>
          <Text mt={4}>功能：支持用户将提取的结构化数据导出为各种格式，如文本文件、表格等。</Text>
          <Button leftIcon={<FaFileExport />} mt={4}>
            导出数据
          </Button>
        </Box>

        {/* 数据管理界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">数据管理界面</Heading>
          <Text mt={4}>功能：提供已提取数据的管理功能，包括查看、编辑和删除操作。</Text>
          <Button leftIcon={<FaDatabase />} mt={4}>
            管理数据
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
