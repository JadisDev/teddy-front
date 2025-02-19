import { Box, Button } from "@chakra-ui/react";
import { useMemo } from "react";
import theme from "../../theme/theme";

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ total, page, limit, onPageChange }: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const paginationNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    if (page > 1) pages.push(1);
    if (page > 3) pages.push("...");
    if (page > 2) pages.push(page - 1);

    pages.push(page);

    if (page < totalPages - 1) pages.push(page + 1);
    if (page < totalPages - 2) pages.push("...");
    if (page !== totalPages) pages.push(totalPages);

    return pages;
  }, [totalPages, page]);

  return (
    <Box display="flex" gap={2} alignItems="center">
      {paginationNumbers.map((p, index) => (
        <Button
          color={p === page ? theme.colors.white : theme.colors.text}
          key={index}
          onClick={() => typeof p === "number" && onPageChange(p)}
          disabled={typeof p !== "number"}
          fontFamily="Inter"
          fontWeight="700"
          fontSize="14px"
          lineHeight="16.94px"
          letterSpacing="0%"
          bg={p === page ? theme.colors.primary : "transparent"}
          border={"none"}
          _hover={{ border: "none" }}
          _active={{ border: "none" }}
          _focus={{ boxShadow: "none", border: "none" }}
          _focusVisible={{ boxShadow: "none", border: "none" }}
        >
          {p}
        </Button>
      ))}
    </Box>
  );
};

export default Pagination;
