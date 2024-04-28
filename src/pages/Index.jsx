import { Box, Button, Flex, Heading, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaFileUpload, FaCog, FaEye, FaFileExport, FaDatabase } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        {/* PDF文件上传界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">PDF文件上传界面</Heading>

          <Flex align="center" mt={4}>
            <Input placeholder="选择PDF文件" type="file" mr={2} />
            <Button leftIcon={<FaFileUpload />}>上传</Button>
          </Flex>
        </Box>

        {/* 结构化提取设置界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">结构化提取设置界面</Heading>

          <Button leftIcon={<FaCog />} mt={4}>
            设置提取规则
          </Button>
        </Box>

        {/* 文本结构化提取界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">文本结构化提取界面</Heading>
        </Box>

        {/* 提取结果预览界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">提取结果预览界面</Heading>

          <Button leftIcon={<FaEye />} mt={4}>
            预览结果
          </Button>
        </Box>

        {/* 导出数据界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">导出数据界面</Heading>

          <Button leftIcon={<FaFileExport />} mt={4}>
            导出数据
          </Button>
        </Box>

        {/* 数据管理界面 */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">数据管理界面</Heading>

          <Button leftIcon={<FaDatabase />} mt={4}>
            管理数据
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
